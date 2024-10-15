import React, { useState, useEffect } from 'react';
import './SendOtp.scss';
import CryptoJS from "crypto-js"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendOtp = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [mistakes, setmistakes] = useState("")
    const [loading, setloading] = useState(false)
    const api = "https://footfavesbackend.onrender.com"

    const otp = () => {
        setloading(true)
        if (email == "") {
            setmistakes("Email is mandatory")
            setloading(false)
        } else {
            try {
                axios.post(`${api}/user/sendotp`, { email })
                    .then(res => {
                        console.log(res);
                        localStorage.OTPverifications = res?.data?.OTPverifications
                        const hashedotp = CryptoJS.AES.encrypt(res?.data?.otp ,"donttryguessingmysecretkeys").toString()
                        const hashedemail = CryptoJS.AES.encrypt(res?.data?.Email ,"donttryguessingmysecretkeys").toString()
                        localStorage.otp = hashedotp
                        localStorage.Email = hashedemail
                        toast.success("OTP sent Successfully")
                        setemail("")
                        setloading(false)
                        setTimeout(() => {
                            navigate("/verifyotp")
                        }, 1000);
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error(err?.response?.data?.message)
                        setloading(false)
                    })
            } catch (error) {
                console.log(error);
            }
        } 
    }

    return (
        <>
      <div className='carryotp'>
      <div class="login-box">
                <h2>OTP</h2>
                <form>
                    <div class="user-box">
                        <label >Email</label>
                        <input className='mt-5' type='email' value={email} placeholder='email' onChange={(e) => setemail(e.target.value)} />

                    </div>
                    <div style={{ color: "red" }}>{email == "" ? mistakes : ""}</div>
                    {loading?<button type='button' className='log-btn mt-2'><div class="otploader"></div> </button>: <button type='button' className='log-btn mt-2' onClick={otp}>Send OTP</button>}
                    
                </form>

            </div>
      </div>
            <ToastContainer />
        </>
    );
};



export default SendOtp;
