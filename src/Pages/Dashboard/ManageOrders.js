import React from 'react';
import useOrders from '../../hooks/useOrders';
import DeletingModal from './DeletingModal';


const ManageOrders = () => {

    const [orders, setOrders] = useOrders()


    return (
        <div>
        <div className='bg-[#677E81] py-10  px-10'>

            <div className="overflow-x-auto">

                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th>No</th>

                            <th>Email</th>
                            
                            <th>City</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={order._id}
                            >

                                <th>{index + 1}</th>
                                <td className='p-0 w-8'>{order.email}</td>
                              
                                <td>{order.city}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td><button className="btn btn-xs">unpaid</button></td>
                                <td><button className="btn btn-xs">Pending</button></td>
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

export default ManageOrders;