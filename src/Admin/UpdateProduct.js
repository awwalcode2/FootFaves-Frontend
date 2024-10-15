import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [products, setproducts] = useState([])

    const [changestate, setchangestate] = useState(false)

    const [productprice, setproductprice] = useState()
    const [productname, setproductname] = useState("")
    const [productdescription, setproductdescription] = useState("")
    const [productimage, setproductimage] = useState("")
    const [prodCategory, setprodCategory] = useState([])
    const [productid, setproductid] = useState("")
    const api = "https://footfavesbackend.onrender.com"

    const navigate = useNavigate()

    // for fetching products in database

    const getProducts = async () => {
        let URL = `${api}/admin/adminUpdate`
        await axios.get(URL)
            .then((res) => {
                setproducts(res.data.products)
                console.log(products);
            }).catch((err) => {
                console.log(err);
            })

    }

    // for fetching from database immediately landing on the page


    useEffect(() => {
        let security = localStorage.getItem("security")
        axios.get(`${api}/admin/verifyadmin`, {
            headers: {
                "Authorization": `Bearer ${security}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => {
                console.log(res);
                setchangestate(false)
            }).catch((err) => {
                setchangestate(true)
                navigate("/")
                console.log(err);
            })


        getProducts()

    }, [changestate])

    // for deleting product

    const deleteproduct = () => {
        setchangestate(true)
        axios.post(`${api}/admin/deleteproduct`, { productid })
            .then((res) => {
                console.log(res);
                setchangestate(false)
                toast.success("deleted successfully")

            }).catch((err) => {
                console.log(err);
                setchangestate(false)
                toast.error(err.response.data.message)
            })
    }


    // for editing product

    const edit = () => {
        setchangestate(true)
        axios.post(`${api}/admin/edit`, { productid, productname, productprice, productdescription, productimage, prodCategory })
            .then((res) => {
                console.log(res);
                setchangestate(false)
                setprodCategory([])
                toast.success(res.data.message)
            }).catch((err) => {
                console.log(err);
                setchangestate(false)
                setprodCategory([])
                toast.error(err?.response?.data?.message)
            })
    }

    // for  editing modal button

    const editmodal = (id) => {
        setproductid(id);
        axios.post(`${api}/admin/editproduct`, { id })
            .then((res) => {
                console.log(res);
                console.log(res.data.value);
                setproductprice(res.data.value.productprice)
                setproductname(res.data.value.productname)
                setproductimage(res.data.value.productimage)
                setproductdescription(res.data.value.productdescription)


            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message)
            })
    }

    // for new product image 
    const changeimage = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.onload = (e) => {
            setproductimage(e.target.result)
        }
        reader.readAsDataURL(file)
    }

    // functions for pick category
    const pickCategory = (e) => {
        if (prodCategory.length >= 3) {
            return;
        }

        if (prodCategory.includes(e)) {
            return;
        }

        console.log(e);
        setprodCategory([...prodCategory, e])
    }

    // deleting pick category

    const deletepickCategory = (i) => {
        console.log(i);
        let newprodCategory = prodCategory.filter((el, ind) => i !== ind)
        console.log(newprodCategory);
        setprodCategory(newprodCategory)

    }

    return (
        <>
            <div className="carry d-flex justify-content-around flex-wrap">
                {products == "" ? <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", }}>looking forward to see yah post here dear admin!!</h1> : products.map((product, i) => (
                    <div key={i}>
                        <h3>{product.productname}</h3>
                        <img src={product.productimage} alt="" width={"380px"} height={"380px"} style={{ borderRadius: "15px", cursor: "pointer" }} />
                        <div className='d-flex justify-content-between gap-4'>
                            <p>{product.productprice}</p>
                            <span>{product.productdescription}</span>
                        </div>
                        <div className='d-flex gap-3'>
                            <button className='btn btn-success col-6' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editmodal(product._id)}>Edit</button>
                            <button className='btn btn-danger col-6' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setproductid(product._id)}>Delete</button>
                        </div>

                    </div>

                ))}
            </div>

            {/* toas container */}

            <ToastContainer />

            {/* edit modal */}

            <div class="modal modal-xl fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setprodCategory([])}></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" value={productname} className='form-control mt-3' onChange={(e) => setproductname(e.target.value)} />

                            <input type="text" value={productprice} className='form-control mt-3' onChange={(e) => setproductprice(e.target.value)} />

                            <input type="text" value={productdescription} className='form-control mt-3' onChange={(e) => setproductdescription(e.target.value)} />


                            <label htmlFor="" className='mt-2'>Category</label>
                            <select onChange={(e) => pickCategory(e.target.value)} id='category' name='category' className='form-control'>
                                <option value="men">Men</option>
                                <option value="men">Men</option>
                                <option value="slides">Slides</option>
                                <option value="shoe">shoe</option>
                                <option value="palm">palm</option>

                                <option value="women">women</option>
                                <option value="slides">Slides</option>
                                <option value="sandals">sandals</option>
                                <option value="shoe">shoes</option>
                            </select>

                            <div className="d-flex mt-2">
                                {prodCategory.map((el, i) => (
                                    <div className='bg-primary rounded p-1 m-1' key={i}>
                                        <span>{el}</span>
                                        <button className='btn text-danger' style={{ outline: "none", border: "none" }} onClick={() => deletepickCategory(i)}>&times;</button>
                                    </div>
                                ))}
                            </div>


                            <input type="file" className='form-control mt-3' onChange={changeimage} />
                            <img src={productimage} alt="" width={"300px"} className='mt-3' />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setprodCategory([])}>Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={edit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* delete modal */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Delete Assets</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p style={{ fontSize: "15px", fontWeight: "400px" }}>Are you sure you want to delete the selected asset?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={deleteproduct}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct