
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeletingModal from './DeletingModal';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);


    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    return res.json()
                })



                .then(data => {
                    setOrders(data)

                });
        }
    }, [navigate, user])


    return (
        <div>
            <div className='bg-[#677E81] py-10 h-screen px-10'>
                 <h1 className='text-2xl text-center font-semibold text-white uppercase mb-3'>My Orders</h1>
                <div className="overflow-x-auto">

                    <table className="table w-full ">

                        <thead>
                            <tr>
                                <th>No</th>

                                <th>Email</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                orders.map((order, index) => <tr
                                    key={order._id}
                                >

                                    <th>{index + 1}</th>
                                    <td>{order.email}</td>
                                    <td>{order.street}</td>
                                    <td>{order.city}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td><button className="btn btn-xs">Payment</button></td>
                                    <td>
                                        <label for="my-modal-6" className="btn btn-xs btn-warning">Cancel</label>
                                    </td>



                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                {
                    orders && <DeletingModal
                        orders={orders}
                        setOrders={setOrders}
                    >
                    </DeletingModal>

                }
            </div>
        </div>
    );
};

export default MyOrders;