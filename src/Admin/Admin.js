import React, { useState } from 'react'
import "./AdminPage.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import logo from "e-commerce-website/src/SHOES/FootFaves Logo.png"

const Admin = () => {
  const [productname, setproductname] = useState("")
  const [productdescription, setproductdescription] = useState("")
  const [productprice, setproductprice] = useState("")
  const [productimage, setproductimage] = useState("")
  const [prodCategory, setprodCategory] = useState([])

  const changeimage = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.onload = (e) => {
      setproductimage(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  const update = () => {
    if (!productname || !productdescription || !productprice || !productimage || prodCategory.length < 1) {
      toast.error(" all input filds are required")
    } else {
      if (!productprice.startsWith("$" || "#")) {
        toast.error("product price must start with $ ")
      } else {
        axios.post("http://localhost:7777/admin/uploadProduct", { productname, productdescription, productprice, prodCategory, productimage }
          // , {
          //   headers: {
          //     "Authorization": `Bearer ${token}`,
          //     "Content-Type": "application/json",
          //     "Accept": "application/json"
          //   }
          // }

        )
          .then((res) => {
            console.log(res);
            toast.success("saved to database successfully")
          }).catch((err) => {
            toast.error(err.response.data.message)
            console.log(err);
          })
      }
    }

  }

  const pickCategory = (e) => {
    if (prodCategory.length >= 3) {
      return;
    }

    if (prodCategory.includes(e)) {
      return;
    }

    console.log(e);
    setprodCategory([...prodCategory, e])
    // console.log(prodCategory);
  }
  const deletepickCategory = (i) => {
    console.log(i);
    let newprodCategory = prodCategory.filter((el, ind) => i !== ind)
    console.log(newprodCategory);
    setprodCategory(newprodCategory)

  }

  return (
    <>
      <div className="admin-container">
        <div className='left'>
          <img src={require("../SHOES/FootFaves Logo.png")} alt="" width={'80px'} />
          <Link className='admin-link'>Add product</Link>
          <Link className='admin-link'>Edit product</Link>
          <Link className='admin-link'>others</Link>
        </div>

        <div className='right'>
          <div className='big-form col-6 mx-auto'>
            <div className='form-group mt-3'>
              <label htmlFor="" className='label'>productname</label>
              <input type="text" className='form-control' onChange={(e) => setproductname(e.target.value)} value={productname} placeholder='product name' name='productname' />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="">productdescription</label>
              <input type="text" className='form-control' onChange={(e) => setproductdescription(e.target.value)} value={productdescription} placeholder='product description' name='productdescription' />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="">productprice</label>
              <input type="text" className='form-control' onChange={(e) => setproductprice(e.target.value)} value={productprice} placeholder='product price' name='productprice' />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="">Image</label>
              <input type="file" className='form-control' onChange={changeimage} name='image' />
            </div>

            <div className="form-group mt-3">
              <img src={productimage} alt="" width={"250px"} style={{ borderRadius: "20px" }} />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="">Category</label>
              <select onChange={(e) => pickCategory(e.target.value)} id='category' name='category'>
                <option value="men">Men</option>
                <option value="men">Men</option>
                <option value="slide">Slides</option>
                <option value="shoe">shoe</option>
                <option value="palm">palm</option>

                <option value="women">women</option>
                <option value="slide">slides</option>
                <option value="shoe">shoes</option>
                <option value="palm">palm</option>
              </select>

              <div className="d-flex">
                {prodCategory.map((el, i) => (
                  <div className='bg-primary rounded p-1 m-1' key={i}>
                    <span>{el}</span>
                    <button className='btn text-danger' style={{ outline: "none", border: "none" }} onClick={() => deletepickCategory(i)}>&times;</button>
                  </div>
                ))}
              </div>

            </div>


            <div>
              <button onClick={update} className='btn btn-primary'>Update</button>
            </div>

            <ToastContainer />


          </div>
        </div>
      </div>
    </>
  )
}

export default Admin