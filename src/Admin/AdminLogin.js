import React, { useState } from 'react'
import "./AdminLogin.scss"
import { useFormik } from 'formik'
import *  as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [loading ,setloading ] = useState(false)
    const navgate = useNavigate()
    const api = "https://footfavesbackend.onrender.com"
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        }, validationSchema: yup.object({
            email: yup.string().required("email is required"),
            password: yup.string().required("password is required")
        }),onSubmit:(values)=>{
            setloading(true)
            console.log(values);
            axios.post(`${api}/admin/adminlogin`,values)
            .then((res)=>{
                console.log(res);
                toast.success("login Successful")
                setloading(false)
                navgate("/admin")
                localStorage.security = res?.data?.security

                console.log(res?.data?.security);
            }).catch((err)=>{
                console.log(err);
                toast.error(err?.response?.data?.message)
                setloading(false)
            })
        },
    })
    return (
        <>


            <div class="vid-container">
                <video id="Video1" class="bgvid back" autoplay="false" muted="muted" preload="auto" loop>
                    <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4" />
                </video>
                <div class="inner-container">
                    <video id="Video2" class="bgvid inner" autoplay="false" muted="muted" preload="auto" loop>
                        <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4" />
                    </video>

                    <form action="" class="box" onSubmit={formik.handleSubmit}>
                        <h1>Login</h1>
                        <input type="text" placeholder="email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        <small className='text-danger ps-5 fs-6'>{formik.touched.email && formik.errors.email}</small>
                        <input type="text" placeholder="Password" name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        <small className='text-danger ps-5 fs-6 '>{formik.touched.password && formik.errors.password}</small>
                        <div>{loading? <button> <div class="loader888"></div> </button> : <button type='submit'>Login</button>}</div>
                        <p style={{fontSize:"17px"}}>Welcome Back,Admin!</p>
                    </form>

                </div>
            </div>
            <ToastContainer />



        </>
    )
}

export default AdminLogin