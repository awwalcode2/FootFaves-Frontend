import React, { useEffect, useState } from 'react'
import "./AdminNav.scss";
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
const AdminNav = () => {
    const [reload, setreload] = useState(true)
    const [slide, setslide] = useState(true)
    let security = localStorage.getItem("security")
    const navigate = useNavigate()
    const api = "https://footfavesbackend.onrender.com"

    useEffect(() => {
        axios.get(`${api}/admin/verifyadmin`, {
            headers: {
                "Authorization": `Bearer ${security}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => {
                console.log(res);
                setreload(true)
            }).catch((err) => {
                setreload(false)
                navigate("/")
                console.log(err);

            })
    }, [reload])

    const gohome = () => {
        navigate("/")
    }

    const cancelSlide = () => {
        setslide(!slide)
    }

    return (
        <>
            <div className="big-nav">
                <div className="navbar">
                    <div className='left'>
                        <div onClick={gohome} style={{ cursor: "pointer" }}>
                            <img src={require("../SHOES/FootFaves Logo.png")} alt="" width={'80px'} />
                        </div>

                        <div className='welcome fs-3'>Welcome back, Admin!</div>

                        <div className='adminlinks'>
                            <Link className='admin-link' to="/Admin">Add product</Link>
                            <Link className='admin-link' to="/Admin/Update">UpdateProduct</Link>
                            <Link className='admin-link'>Help</Link>
                        </div>

                        <div className="drop">
                            <button className='menu' onClick={cancelSlide}>
                                <IoMdMenu size={'30px'} cursor={'pointer'} />
                            </button>
                            {
                                slide &&

                                <div className='dropdown'>
                                <div className='vg'>
                                    <button className='btn' onClick={cancelSlide}> <MdOutlineClear size={35} /></button>
                                </div>
                                <hr width="80%" className='hr' size="20" />

                                <div className='design' onClick={cancelSlide}>
                                    <div className='flexx'>
                                        <Link className='links' to="/Admin">Add product</Link> <AiFillHome className='icon' size={23} />
                                    </div>
                                    <div className='flexx' onClick={cancelSlide}>
                                        <Link className='links' to="/Admin/Update">UpdateProduct</Link> <FaAngleRight className='icon' size={23} />
                                    </div>
                                    <div className='flexx'>
                                        <Link className='links'>Help</Link> <FaAngleRight className='icon' size={23} />
                                    </div>
                               
                                </div>
                                <div className='formm2'>
                                    <p>You're in the Management Hub, where all key operations and decisions come to life. This space is designed for you to oversee, strategize, and guide our team toward continued success. Let’s keep making strides toward excellence!</p>
                                    <div className='disp'>
                                        <button className='blue-btn'>Join Us </button>
                                        <button className='grey-btn'>Login</button>
                                    </div>

                                </div>

                            </div>
                            }

                         
                        </div>
                    </div>
                </div>

                <div className="display">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminNav