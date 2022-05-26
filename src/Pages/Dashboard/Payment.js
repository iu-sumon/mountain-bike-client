import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51L3cIjAExOLQK2IMSGNUgjrGJNIOPc3ZWlNCxj4OtPf9JrJpLw2SMOqrx3Vg34eso8pgcIkYH12DUhDQosg5Iz0f00ZoF4XJ9b');


const Payment = () => {
    const { id } = useParams();
    const[user]=useAuthState(auth)

    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

return (
      <div className='bg-[#677E81] py-10 h-screen px-10'>
            <div>
           <div class="card w-50 max-w-md mx-auto bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold text-center text-2xl">Hello, {user?.displayName}</p>
                    <div className='flex  justify-center items-center'>
                    <p class="text-xl text-center">Please Pay for</p>
                     <p className='text-center font-bold'>${order.price}</p>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutFrom />
                    </Elements>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Payment;