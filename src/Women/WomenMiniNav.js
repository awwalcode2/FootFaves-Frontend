import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import "../MiniNav.scss";
const WomenMiniNav = () => {
    const [heart, setheart] = useState(false)
    const like = ()=>{
        setheart(!heart)
    }
    return (
        <>
            <nav className='nav'>
                <div className="adjust">
                    <div>
                        <h1 className='h1'>Women</h1>
                    </div>
                    <div className='links'>
                        <Link className='link' to="/women/shoes">Shoes </Link>
                        <Link className='link' to="/women/palms">slides</Link>
                        <Link  className='link' to="/women/sandals">Sandals</Link>
                        <Link className='link'>Help</Link>
                    </div>
                    <div className='icons'>
                        <button><LuSearch size={30}/></button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default WomenMiniNav