import React, { useState, useEffect } from 'react';
import './ConfirmOtp.scss';
import CryptoJS from "crypto-js"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmOtp = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [confirmeotp, setconfirmeotp] = useState("")
    const [otp, setotp] = useState("")
    const [mistakes, setmistakes] = useState("")
    const [loading, setloading] = useState(false)
    const api = "https://footfavesbackend.onrender.com"



    useEffect(() => {
        const hashedemail = localStorage.getItem("Email")
        
        const hashedotp = localStorage.getItem("otp")
        const OTPverifications = localStorage.getItem("OTPverifications")
        const localemail = CryptoJS.AES.decrypt(hashedemail, "donttryguessingmysecretkeys").toString(CryptoJS.enc.Utf8)
        const localotp = CryptoJS.AES.decrypt(hashedotp, "donttryguessingmysecretkeys").toString(CryptoJS.enc.Utf8)
        setemail(localemail)
        setconfirmeotp(localotp)

        axios.get(`${api}/user/verifypassword`, {
            headers: {
                "Authorization": `Bearer ${OTPverifications}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => {
                console.log(res);
                return;
            }).catch((err) => {
                toast.error("unauthorised to view page")
                setTimeout(() => {
                    navigate("/forgotpassword")
                }, 900);
                console.log(err);
            })
    }, [])

    const checkotp = () => {

        if (!email || !confirmeotp) {
            navigate("/forgotpassword")
        } else {
            if (otp == "") {
                toast.error("OTP is required")
            } else {
                let authenthicatedUser = otp == confirmeotp
                if (authenthicatedUser) {
                    navigate("/resetpassword")
                    toast.success("OTP confirmed")
                    const hashedcomfirmotp = CryptoJS.AES.encrypt("resetpassword","donttryguessingmysecretkeys").toString()
                    localStorage.Verify = hashedcomfirmotp
                } else {
                    toast.error("Incorect OTP")
                }
            }

        }



    }

    return (
        <>

<div className='body5'>
                <div class="login-box5">
                    <h3>Verify</h3>
                    <form>

                        <div class="user-box5">
                            <input type="text" value={email} placeholder="Email" />
                            <label>Email</label>

                        </div>

                        <div class="user-box5">
                            <input type="number" placeholder="OTP" value={otp} onChange={(e) => setotp(e.target.value)} />
                           
                            <label>OTP</label>
                        </div>
                        <a href="#" onClick={checkotp}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Verify OTP
                        </a>
                    </form>
                </div>
            </div>
          
            <ToastContainer />
        </>
    );
};



export default ConfirmOtp;