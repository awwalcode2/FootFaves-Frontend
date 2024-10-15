import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { API_ENDPOINT, PublicKey } from '../Services/config'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'
// import getToken from '../Services/token';

const Checkout = () => {
    const [click, setClick] = useState(false)
    const [team, setTeam] = useState(null)
    const [componentProps, setProps] = useState(null)
    const token = getToken()
    const navigate = useNavigate()

    useEffect(() => {
        const getTeam = async () => {
            try {
                const res = await axios.get(`${API_ENDPOINT}/api/team/getTeam`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (res.data.status === 'okay') {
                    if (res.data.team.paymentStatus === 'completed') {
                        toast.success('Payment already completed');
                        setTimeout(() => {
                            navigate('/dashboard');
                        }, 3000);
                        return;
                    }
                    setTeam(res.data.team);
                    setProps({
                        email: res.data.team.email,
                        amount: 51250 * 100,
                        phone: "+2348164934974",
                        metadata: {
                            FullName: res.data.team.teamName,
                        },
                        publicKey: PublicKey,
                        name: res.data.team.teamName,
                        text: "Pay with Paystack",
                        onSuccess: (ref) => {
                            postIt(ref);
                            navigate('/dashboard/payments');
                            setClick(false);
                        },
                        onClose: () => {
                            setClick(false);
                            alert("Wait! You need this payment, don't go!!!!");
                        },
                    });
                    setClick(true);
                }
            } catch (error) {
                setError(error?.response?.data?.message || error?.message);
                if (error?.response?.data?.message === 'couldnt find team') {
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            }
        };

        if (token) {
            getTeam();
        } else {
            toast.info('Session expired');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        }
    }, [token, navigate]);

    useEffect(() => {
        if (click && componentProps) {
            const paystackButton = document.querySelector('.paystack-button');
            paystackButton?.click();
        }
    }, [click, componentProps]);






    const postIt = async (ref) => {
        try {
            const res = await axios.post(`${API_ENDPOINT}/api/team/createTransaction`, { transactionRef: ref.reference }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            if (res.data.status == 'okay') {
                navigate('/dashboard/payments')
            } else {
                navigate('/dashboard/payments')
            }
        } catch (error) {
            console.log(error);
        }


    }








    return (
        <div style={{ height: '100vh' }} className='w-100 bg-success'>
            <div style={{ visibility: 'hidden' }} >
                {team ? <PaystackButton className="paystack-button rounded paycolor"  {...componentProps} /> : ''}
            </div>
            <Toaster />
        </div>

    )
}

export default Checkout