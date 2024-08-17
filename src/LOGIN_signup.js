import React, { useState } from 'react'
import './Login_signup.scss'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const LOGIN_signup = () => {
    const [show, setshow] = useState(false)
    const showPass = () => {
        setshow(!show)
    }

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            firstname: yup.string().required("input field must not be empty"),
            lastname: yup.string().required("input field must not be empty"),
            email: yup.string().required("input field must not be empty").email("Must be a valid email"),
            password: yup.string().required("input field must not be empty"),
        }),
        onSubmit: (values) => {
            console.log(values);
            axios.post("http://localhost:7777/user/singup",values)
            .then((res)=>{
                  toast.success("signup successful")
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                toast.error(err.response.data.message)
            })
        },
    })


    const formik2 = useFormik({
        initialValues: {
            email2: "",
            password2: "",
        },
        validationSchema: yup.object({
            email2: yup.string().required("input field must not be empty").email("Must be a valid email"),
            password2: yup.string().required("input field must not be empty")
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:7777/user/login",values)
            .then((res)=>{
                toast.success("login successful")
            }).catch((err)=>{
                toast.error(err.response.data.message)
            })
            
        }
    })




    return (
        <>
          <div className="body">
          <div className="main">

<input type="checkbox" id="chk" aria-hidden="true" />
<div className="signup">
    <form action="" onSubmit={formik.handleSubmit}>
        <label for="chk" aria-hidden="true">Register</label>
        
            <input type="text" name="firstname" placeholder="firstname" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} />
            <small className='text-danger' style={{margin:'20px 35px'}}>{formik.touched.firstname && formik.errors.firstname}</small>

            <input type="text" name="lastname" placeholder="lastname" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
            <small className='text-danger' style={{margin:'20px 35px'}}>{formik.touched.lastname && formik.errors.lastname}</small>
 

      
            <input type="email" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
            <small className='text-danger' style={{margin:'20px 35px'}}>{formik.touched.email && formik.errors.email}</small>


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: '50px' }}>
            <input style={{ position: 'relative' }} type={show ? "text" : "password"} name="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
            <button onClick={showPass} style={{ width: '30px', position: 'absolute', right: 50, border: 'none', background: 'transparent' }} type='button'>{show ? <BiSolidShow /> : <BiSolidHide />}</button>
        </div>
        <small className='text-danger' style={{margin:'20px 35px'}}>{formik.touched.password && formik.errors.password}</small>
        <div>
            <button className='button' type='submit'>Sign up</button>
            <ToastContainer />
        </div>
    </form>
</div>

<div className="login">

    <form onSubmit={formik2.handleSubmit}>
        <label for="chk" aria-hidden="true">login</label>
        <input type="email" name="email2" placeholder="email2" required=""  onChange={formik2.handleChange} value={formik2.values.email2} onBlur={formik2.handleBlur} className='try'/>
        <small className='text-danger' style={{margin:'20px 35px'}}>{formik2.touched.email2 && formik2.errors.email2}</small>

        <input type="password" name="password2" placeholder="password"  onChange={formik2.handleChange} value={formik2.values.password2} required="" onBlur={formik2.handleBlur}/>
        <small className='text-danger' style={{margin:'20px 35px'}}>{formik2.touched.password2 && formik2.errors.password2}</small>

        <button className='button' type='submit'>login</button>
        <label className="forgot-password">forgotten-password?</label>
    </form>
</div>
</div>
          </div>

        </>
    )
}

export default LOGIN_signup
