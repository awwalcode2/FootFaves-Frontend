
import React, { useState, useEffect } from 'react';
import './Resetpassword.scss';
import CryptoJS from "crypto-js"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resetpassword = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [authenticate, setauthenticate] = useState("")
    const [Password, setPassword] = useState("")
    const [loading, setloading] = useState(false)
    const [authourize, setauthourize] = useState(false)
    const api = "https://footfavesbackend.onrender.com"



    useEffect(() => {
        const hashedemail = localStorage.getItem("Email")
        const OTPverifications = localStorage.getItem("OTPverifications")
        const verify = localStorage.getItem("Verify")

        if (!hashedemail || !OTPverifications || !verify) {
            navigate("/forgotpassword")
        } else {
            const localemail = CryptoJS.AES.decrypt(hashedemail, "donttryguessingmysecretkeys").toString(CryptoJS.enc.Utf8)
            const hashedverify = CryptoJS.AES.decrypt(verify, "donttryguessingmysecretkeys").toString(CryptoJS.enc.Utf8)
            setemail(localemail)
            if (!hashedverify) {
                navigate("/verifyotp")
            } else {
                axios.get(`${api}/user/verifypassword`, {
                    headers: {
                        "Authorization": `Bearer ${OTPverifications}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                    .then((res) => {
                        console.log(res.data);
                        setauthourize(true)
                    }).catch((err) => {
                        toast.error("unauthorised to view page")
                        setTimeout(() => {
                            setauthourize(false)
                            navigate("/forgotpassword")
                        }, 800);
                        console.log(err);
                    })

                    if (authourize == "false" || hashedverify !== "resetpassword") {
                        toast.error("unauthorised page")
                        navigate("/verifyotp")
                    } else {
                        return;
                    }
            }
        }



    }, [])

    const changepassword = () => {
        setloading(true)
        if (Password == "") {
            toast.error("password is required")
            setloading(false)
        } else {
            axios.post(`${api}/user/changepassword`, { email, Password })
                .then((res) => {
                    console.log(res.data);
                    toast.success(res.data.message)
                    localStorage.removeItem("Verify")
                    setPassword("")
                    setloading(false)
                    navigate("/signup")
                    return;
                }).catch((err) => {
                    toast.error(err.response.data.message)
                    setloading(false)
                    console.log(err);
                })
        }
    }


    return (
        <>
            <div class="container">
                <div class="card">
                    <h1 class="card-title">Hello !</h1>
                    <small class="card-subtitle">Enter your credentials and get access</small>
                    <form class="card-form">
                        <label for="username">Username</label>
                        <div class="card-input-container username">
                            <input type='text' placeholder='Email' id="username" value={email} />
                        </div>
                        <label for="password">Password</label>
                        <div class="card-input-container password">
                            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>{loading ? <button class="card-button" type='button' ><div class="loader77"></div></button> : <button class="card-button" type='button' onClick={changepassword}>Reset password</button>}</div>
                        <small class="card-forgot-password" style={{ display: "none" }}>Forgot your passwrod ? <a>Reset Password</a></small>
                    </form>
                </div>
            </div>


            <ToastContainer />
        </>
    );
};



export default Resetpassword;