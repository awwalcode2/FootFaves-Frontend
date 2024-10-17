import React, { useState, useEffect } from 'react';
import './Categories.scss';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate()

  return (
    <div className="Categories">
      <h3 className='footfavescategory'>FOOTFAVES POPULAR CATEGORY</h3>
      <div className='Allcategories'> 
        <div className='each-categories' onClick={() => navigate("/Men")}>Men</div>
        <div className='each-categories' onClick={() => navigate("/Men/shoe")}>Men's Shoes</div>
        <div className='each-categories' onClick={() => navigate("/Men/slides")}>Men's Slides</div>
        <div className='each-categories' onClick={() => navigate("/Men/palm")}>Men's Palm</div>
        <div className='each-categories' onClick={() => navigate("/Women")}>Women</div>
        <div className='each-categories' onClick={() => navigate("/Women/shoe")}>Women's Shoe</div>
        <div className='each-categories' onClick={() => navigate("/Women/palm")}>Women's Palm</div>
        <div className='each-categories' onClick={() => navigate("/Women/slides")}>Women's Slides</div>
      </div>

      <div className='MORE-ABOUT-US'>
        <div className='align'>
          <h3 className='explanation'>FIND YOUR PERFECT FIT WITH FOOTFAVES <br /> BASED ON EXPERIENCE</h3>
        </div>

        <p className='explanation-Ptag'>At FootFaves, we know that finding the right pair of shoes is about more than just style—it’s about the perfect fit for your lifestyle, comfort, and needs. Whether you're looking for a chic pair for a night out, durable footwear for everyday wear, or athletic shoes that support your active lifestyle, we’ve got something for everyone.Your search for the perfect shoes starts with understanding your unique blend of personal style, preferences, and daily needs. By focusing on your individuality, you can confidently browse our collection and find the pair that not only matches your taste but also offers long-lasting comfort and support.</p>
      </div>

    </div>
  );
};



export default Categories;
