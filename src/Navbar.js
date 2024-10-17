import React, { useState } from 'react'
import "./Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import MiniNav from './MiniNav';
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from 'react-redux'
import { IoMdMenu } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { CiLogin } from "react-icons/ci";



const Navbar = () => {
    const [slide, setslide] = useState(false)
    let navigate = useNavigate()
     
    const globalState = useSelector((state) => state.CounterReducer.cartArray)
    const NoOfProducts = globalState.reduce((accumulator, each) => accumulator + each.quantity, 0);
    console.log(globalState);
    const [heart, setheart] = useState(false)
    const like = () => {
        setheart(!heart)
    }
    const tohome = () => {
        navigate("/")
    }
    const callLogOut = () => {
        alert("welcome")
    }
    const cancelslide = ()=>{
        setslide(!slide)
    }
    return (
        <>


            <nav>
                <div className="adjust">
                    <div className="logo" onClick={tohome}>
                        <img src={require("./SHOES/FootFaves Logo.png")} width={100} alt="" style={{ flex: 1 }} />
                    </div>
                    <div className='genderlinks'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/Men">Men</Link>
                        <Link className='link' to="/Women">Women</Link>
                        <Link className='link'>Contact Us</Link>
                    </div>
                    <div className='icons'>
                        {/* <button><LuSearch size={30}/></button> */}
                        <div className='focusprofile'>
                            <button className='MY-profile'><CgProfile color='black' size={35} /></button>
                            <div className='drop-profille'>
                                <p> <button > <MdSupervisorAccount size={25} /> Me</button></p>
                                <p onClick={callLogOut}><button ><CiLogin size={28} />  LOG OUT </button></p>
                            </div>
                        </div>
                        <button onClick={like}> {heart ? <FcLike size={30} /> : <SlHeart size={30} />} </button>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-20px" }}>
                            <span style={{ color: "red" }}>{NoOfProducts}</span>
                            <Link to={"/cart"}><FiShoppingCart size={35} color='black' /></Link>
                        </div>

                    </div>

                    <div className="drop">
                        <button className='menu' onClick={cancelslide}>
                            <IoMdMenu size={'30px'} cursor={'pointer'} />
                        </button>
                        {slide&&
                            <div className='dropdown'>
                            <div className='vg'>
                                <button className='btn' onClick={cancelslide} > <MdOutlineClear size={35} /></button>
                            </div>
                            <hr width="80%" className='hr' size="20" />

                            <div className='design'>
                                <div className='flexx' onClick={cancelslide}>
                                    <Link className='links' to="/">Home </Link> <AiFillHome className='icon' size={23} />
                                </div>
                                <div className='flexx' onClick={cancelslide}>
                                    <Link className='links' to="/Men"> Men </Link> <FaAngleRight className='icon' size={23} />
                                </div>
                                <div className='flexx' onClick={cancelslide}>
                                    <Link className='links' to="/Women">Women </Link> <FaAngleRight className='icon' size={23} />
                                </div>
                                <div className='flexx' onClick={cancelslide}>
                                    <Link className='links'> Contact Us </Link> <MdContactPhone className='icon' size={23} />
                                </div>
                            </div>
                            <div className='formm'>
                                <p>Become a FootFaves Member for the best products and the best quality</p>
                                <div className='disp'>
                                    <button className='blue-btn'>Join Us </button>
                                    <button className='grey-btn'>Login</button>
                                </div>

                            </div>

                        </div>

                        }
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Navbar