
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./MiniNav.scss";
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { TiArrowBack } from "react-icons/ti";
const MiniNav = ({ category }) => {
    let navigate = useNavigate()
    const { productName, otherproduct } = useParams()
    const [heart, setheart] = useState(false)
    const like = () => {
        setheart(!heart)
    }
    const goback = ()=>{
        navigate(-1)
    }
    return (
        <>
            <nav className='nav'>
                <div className="adjust">
                    <div className='cont-back-btn'>
                        <h1 className='h1'>{category}</h1>
                        <button onClick={goback}  className='back'>< TiArrowBack  size={20}/>Back</button>
                    </div>
                    <div className='links2'>
                        <Link className='link' to={`/${productName}/shoe`}>Shoes </Link>
                        <Link className='link' to={`/${productName}/slides`}>Slides</Link>

                        <Link className='link' to={`/${productName}/${productName == "Men" ? "palm":"sandals"}`}>{productName == "Men"?"palm":"Sandals"}</Link>
                        <Link className='link'>Help</Link>
                    </div>
                    <div className='icons2'>
                    {/* <button><CgProfile color='black' size={65} style={{display: "none"}}/></button>
                    <button><CgProfile color='black' size={65}  style={{display: "none"}}/></button> */}
                        <button ><LuSearch className='search' /></button>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default MiniNav


