import React from 'react';
import { Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LOGIN_signup from './LOGIN_signup';
import Notfoundpage from './Notfoundpage';
import DisplayingLandingpage from './LandinPage/DisplayingLandingpage';
import Admin from './Admin/Admin';
import DISplaymenPage from './Men/DISplaymenPage';
import AdminNav from './Admin/AdminNav';
import UpdateProduct from './Admin/UpdateProduct';
import DisplayWomenPage from './Women/DisplayWomenPage';
import AdminLogin from './Admin/AdminLogin';
import WommenShoes from './Women/WomenShoes/WommenShoes';
import DisplayWomenPalm from './Women/WomenPalm/DisplayWomenPalm';
import DisplayWomenSandals from './Women/WomenSandals/DisplayWomenSandals';
import DisplayMenShoe from './Men/MenShoe/DisplayMenShoe';
import DisplayMenSlides from './Men/MenSlides/DisplayMenSlides';
import DisplayMenPalm from './Men/MenPalm/DisplayMenPalm';
import Products from './Allproducts/Products';
import AddtoCart from './CheckOut&PaymentGateway/AddtoCart';
import SendOtp from './ForgottenPassword/SendOtp';
import ConfirmOtp from './ForgottenPassword/ConfirmOtp';
import Resetpassword from './ForgottenPassword/Resetpassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayingLandingpage />} />
          <Route path='/signup' element={<LOGIN_signup />} />
          <Route path='/login' element={<Navigate to={"/signup"} />} />
          <Route path='/cart' element={<AddtoCart/>}/>
          <Route path='/forgotpassword' element={<SendOtp/>}/>
          <Route path='/verifyotp' element={<ConfirmOtp/>}/>
          <Route path='/Resetpassword' element={<Resetpassword/>}/>

          {/* <Route path='/Men' element={<DISplaymenPage />} /> */}


          {/* <Route path='/Women' element={<DisplayWomenPage />}/>
          <Route path='/women/palms' element={<DisplayWomenPalm/>}/>
          <Route path='/women/shoes' element={<WommenShoes/>}/>
          <Route path='/women/palms' element={<DisplayWomenPalm/>}/>

          <Route path='/women/sandals' element={<DisplayWomenSandals/>}/> */}




          <Route path='/Admin' element={<AdminNav />}>

            <Route path='/Admin/' index element={<Admin />} />

            <Route path='/Admin/Update' index element={<UpdateProduct />} />

          </Route>

          <Route path='/Admin/login' element={<AdminLogin />} />

          {/* <Route path='/men/shoe' element={<DisplayMenShoe/>}/>
          <Route path='/men/slides' element={<DisplayMenSlides/>}/>
          <Route path='/men/palm' element={<DisplayMenPalm/>}/> */}


          <Route path='/:productName' element={<Products />} >
          <Route path='/:productName/:otherproduct' element={<Products/>}/>
             </Route>

          <Route path='*' element={<Notfoundpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
