
import React, { useState, useEffect } from 'react'
import Navbar from ".././Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { decreamentProduct, delecart, increamentProduct } from '../Redux/ProductSlice'
import "./Addtocart.scss"
import { MdDelete } from "react-icons/md";
import Footer from '../Footer'
import { FaArrowRightLong } from "react-icons/fa6";
import { PaystackButton } from 'react-paystack'


const AddtoCart = () => {
    const CartArray = useSelector((state) => state.CounterReducer.cartArray)
    const NoOfProducts = CartArray.reduce((accumulator, each) => accumulator + each.quantity, 0)
    const subtotalPrices = CartArray.reduce((accumulator, each) => accumulator + each.subtotalPrices, 0).toFixed(1)
    const [totalpay, settotalpay] = useState({})
    console.log(totalpay + "correct");
    console.log(NoOfProducts);
    let delivery = 3

    const dispatch = useDispatch()



    const componentProps = {
        email: "anya@gmail.com",
        amount: 51250 * 100,
        phone: "+2348164934974",
        metadata: {
            FullName: 'awwal',
        },
        publicKey: 'pk_test_9a558288d1670a641dafa6f4e899ddb24f2fe749',
        name: 'awwal',
        text: "CHECK OUT WITH PAYSTACK",
        onSuccess: (ref) => {


        },
        onClose: () => {

            alert("abeg! You need to complete this payment, don't go!!!!");
        },
    }




    return (
        <>

            <Navbar />
            <div className="product mt-5">
                <div className='cart'>
                    {CartArray.length <= 0 ?
                        <div className='noprod'>
                            <p>Oops! Your cart is empty. No worries—there's still plenty to explore. Find your next favorite item and add it to your cart! Need some inspiration? Check out FootFaves top picks.</p>

                        </div> :

                        <div>
                            <div className='yourbag' style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <h3>Your Bag</h3>
                                <span>TOTAL Bag Price: ({NoOfProducts} items)</span> <strong>{ }</strong>
                                <div style={{ fontSize: "16px", fontWeight: "400px", fontStyle: "italic" }}>Your items aren’t reserved yet—complete your checkout now to secure them!</div>
                            </div>
                            {
                                CartArray.map((cart, i) => {
                                    const price = parseFloat(cart.productPrice.split("$")[1]);
                                    const ProductPrice = (price * cart.quantity).toFixed(1);
                                    console.log(ProductPrice);

                                    return (
                                        <>
                                            <div key={i} className='d-flex justify-content-between align-items-center flex-wrap mt-5'>
                                                <div className="leftside">
                                                    <img src={cart.productImage} alt="" width={"250px"} height={"250px"} />
                                                </div>

                                                <div className='right'>
                                                    <div className='eachCart d-flex justify-content-between align-items-center'>
                                                        <p>{cart.description}</p>
                                                        <p>{"$" + ProductPrice}</p>
                                                    </div>

                                                    <div className='eachCart d-flex justify-content-between align-items-center'>
                                                        <p>{cart.productPrice}</p>
                                                        <del>{cart.discountedPrice}</del>
                                                    </div>

                                                    <div className='eachCart d-flex justify-content-between align-items-center'>
                                                        <div className='d-flex gap-3'>
                                                            <button className='btn btn-danger col-6' onClick={() => dispatch(decreamentProduct(cart.id))}>-</button>
                                                            <h1>{cart.quantity}</h1>
                                                            <button className='btn btn-success col-6' onClick={() => dispatch(increamentProduct(cart.id))}>+</button>
                                                        </div>
                                                        <div>
                                                            <MdDelete size={45} color='#82b4e7' cursor={"pointer"} onClick={() => (dispatch(delecart(i)))} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr heighth="200px"></hr>
                                        </>

                                    );
                                })
                            }

                        </div>
                    }


                </div>

                {CartArray.length > 0 &&

                    <div className='tocheckOut'>
                        <div className='checkoutbtn'>
                            <PaystackButton  className='btn col-8 btn-dark d-flex justify-content-center'  {...componentProps} />
                            
                            {/* <button className='btn col-8 btn-dark d-flex justify-content-between'   {...componentProps} > <span>CHECKOUT</span> </button> */}
                        </div>


                        <div>


                        </div>

                        <div className='cartsummary mt-4'>
                            <h4 className='tryout'>CART SUMMARY</h4>
                            <div className='d-flex justify-content-around px-5'>
                                <div >
                                    <p>{NoOfProducts} item(s)</p>
                                    <p className='me-2'>Estimated Delivery & Processing</p>
                                    <p>Estimated Tax</p>

                                </div>

                                <div>
                                    <p>${subtotalPrices}</p>
                                    <p className='me-5'>${delivery}</p>
                                    <p>$10</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <div className='col-8'>
                                    <hr heighth="200p d-flex "></hr>
                                    <div className='d-flex justify-content-between'>
                                        <strong>Total</strong>
                                        <p>${Number(subtotalPrices) + Number(delivery)}</p>

                                    </div>
                                    <hr heighth="200px"></hr>
                                </div>
                            </div>


                        </div>

                        <div>
                            <div className='returns col-8'>
                                <h3 style={{ fontSize: "17px", fontWeight: "450px", color: "#313133" }}>Easy returns, guaranteed.</h3>
                                <div style={{ fontSize: "14px" }}>Return any eligible item within 7 days for a full refund</div>
                            </div>
                            <div className='paypal mt-4'>
                                <button className='paypalbtn ms-1'><img src={require("../SHOES/realpaypal.png")} width={80} /></button>
                            </div>
                        </div>


                        <h1 style={{ color: 'white' }}>vjhckjhgfcxkjhgfdxcfkjhg</h1>

                    </div>
                }

            </div>
            <Footer />
        </>
    )
}

export default AddtoCart