import React from 'react';
import './MenTop.scss';

const MenTop = () => {
    return (
        <div className="image-container d-flex flex-wrap">
        <div className='check col-6'> 
            <img src={require("../SHOES/men1 (1).jpeg")} alt="Image 1" className="image1" />
        </div>
    
        <div className='check col-6'>
            <img src={require("../SHOES/men1.png")} alt="Image 2" className="image2" />
        </div>             
    </div>
    
    );
};
export default MenTop;
