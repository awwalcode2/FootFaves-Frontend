import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import {useDispatch} from "react-redux"
import Loader from './Loader';
import { addProduct } from '../Redux/ProductSlice';

const FilteringProducts = ({ productName, otherproduct }) => {
    const dispatch = useDispatch()
    const [product, setproduct] = useState([])
    const [filteredProduct, setfilteredProduct] = useState([])
    const [reload, setreload] = useState(false)
    const [video, setvideo] = useState(null);
    const [buttonLoader, setbuttonLoader] = useState(false)
    const navigate = useNavigate()
    const modalRef = useRef(null)
    const modalRef2 = useRef(null)
    const api = "https://footfavesbackend.onrender.com"


    let UserSecurity = localStorage.getItem("UserSecurity")

    useEffect(() => {

        axios.get(`${api}/admin/adminUpdate`)
            .then((res) => {
                console.log(res.data.products);
                if (res.data.products) {
                    setproduct(res.data.products)
                    console.log(product);
                    if (product !== "") {
                        if (!otherproduct) {
                            res.data.products.filter((pro) => pro.prodCategory.find((each) => each == productName.toLowerCase()))
                            console.log("hi");
                            setfilteredProduct(res.data.products.filter((pro) => pro.prodCategory.find((each) => each == productName.toLowerCase())))
                            console.log(filteredProduct);
                        } else {
                            res.data.products.filter((pro) => pro.prodCategory.find((each) => each == productName.toLowerCase()) && pro.prodCategory.find((each) => each == otherproduct.toLowerCase()))
                            setfilteredProduct(res.data.products.filter((pro) => pro.prodCategory.find((each) => each == productName.toLowerCase()) && pro.prodCategory.find((each) => each == otherproduct.toLowerCase())))
                            console.log(filteredProduct);
                        }
                    }
                }



                setreload(true)
            }).catch((err) => {
                setreload(false)
            })





    }, [productName, otherproduct])


    const gotoSignup = () => {
        navigate("/signup")
    }


    //   const changevideo = (e) => {
    //     const file = e.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setvideo(e.target.result);
    //           };

    //           reader.readAsDataURL(file);
    //     }
    //   }

    const addToCart = (id) => {
        // console.log(filteredProduct);
        // let purchases = filteredProduct.find((each) => each._id === id)
        // console.log(purchases);
        setbuttonLoader(true)

        axios.post(`${api}/admin/addtocart`, {}, {
            headers: {
                "Authorization": `Bearer ${UserSecurity}`,
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        })
            .then((res) => {
                dispatch(addProduct(id))
                // console.log(res);
                console.log(id);

                setbuttonLoader(false);
               let modal2 = new window.bootstrap.Modal(modalRef2.current)
                modal2.show()
            //     setshow(true)

            //    const timer = setTimeout(() => {
            //         setshow(false)
            //     }, 1000);
            //     return () => clearTimeout(timer);
            })
            .catch((err) => {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
                setbuttonLoader(false)
            });
    };
    const cancel = ()=>{
        // setshow(false)
    }




    return (
        <>
            <div className="onlyWomen">
                {filteredProduct.length === 0 ? <Loader /> :
                    filteredProduct.map((prdct, i) => {
                        const price = parseFloat(prdct.productprice.split("$")[1]);
                        const discountedPrice = (price * 1.2).toFixed(1);

                        return (
                            <div className='eachPrd' key={i}>
                                <img src={prdct.productimage} width={"360px"} height={"360px"} style={{ borderRadius: "8px" }} alt={prdct.productdescription} />
                                <div className='cartbag'>
                                    {buttonLoader ? <button className='col-6 btn btn-primary'>Adding....</button> :
                                    <button className='col-6 btn btn-primary' onClick={() => addToCart({id:prdct._id,description:prdct.productdescription,productPrice:prdct.productprice,productImage:prdct.productimage,discountedPrice,quantity:Number(1),subtotalPrices:Number(prdct.productprice.split("$")[1])})}>
                                         <MdAddShoppingCart  size={"35px"} />
                                    </button>
                                    }
                                </div>
                                <div className="stars">
                                    <div className='pricedescr'>
                                        <p>{prdct.productdescription}</p>
                                        <p style={{ fontSize: "18px", fontWeight: "400" }}>{prdct.productprice}</p>
                                        <del style={{ fontSize: "16px", fontWeight: "350" }}>
                                            ${discountedPrice}
                                        </del>
                                    </div>
                                    <div>
                                        <span><MdOutlineStarPurple500 /></span>
                                        <span><MdOutlineStarPurple500 /></span>
                                        <span><MdOutlineStarPurple500 /></span>
                                        <span><MdOutlineStarPurple500 /></span>
                                        <span><IoStarHalfOutline /></span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            {/* <div>
      <input type="file" accept='video/*' onChange={changevideo} />
      {video && (
        <video src={video} width="400" height="300" controls></video>
      )}
    </div> */}



            {/* signup modal */}

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" ref={modalRef} data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">FootFaves</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Experience the full shopping benefits by signing up on FootFaves and accessing your cart.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Not Yet</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={gotoSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


<div style={{display:"none"}} class="modal fade" id="exampleModal" ref={modalRef2} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Product Successfully added to cart!</h5><MdOutlineDone color='green' size={"30px"}/>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={cancel}>Continue shopping</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>navigate("/cart")}>View Bag</button>
      </div>
    </div>
  </div>
</div>
           
        </>
    );
}

export default FilteringProducts