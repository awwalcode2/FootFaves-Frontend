import React,{useState} from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
const Navbar = () => {
    const [heart, setheart] = useState(false)
    const like = ()=>{
        setheart(!heart)
    }
    return (
        <>


            <nav>
                <div className="adjust">
                    <div className="logo">
                        <img src={require("./SHOES/FootFaves Logo.png")} width={100} alt="" />
                    </div>
                    <div className='links'>
                        <Link className='link'>Home</Link>
                        <Link className='link'>Product</Link>
                        <Link  className='link'>product</Link>
                        <Link className='link'>Contact Us</Link>
                    </div>
                    <div className='icons'>
                        <button><LuSearch size={30}/></button>
                        <button onClick={like}> {heart ? <FcLike size={30}/> : <SlHeart size={30}/>} </button>
                        <Link><FiShoppingCart size={35} color='black'/></Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar