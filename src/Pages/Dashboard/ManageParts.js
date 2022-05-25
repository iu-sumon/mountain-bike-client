import React from 'react';
import useParts from '../../hooks/useParts';
import DeletingModalParts from './DeletingModalParts';
import { Link } from 'react-router-dom';

const ManageParts = () => {

    const [parts, setParts] = useParts()


 return (
        <div>
            <div className='bg-[#677E81] py-10  px-10'>


                <div className="overflow-x-auto">

                    <table className="table w-full ">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Ordered Quantity</th>
                                <th>Available Quantity</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                parts.map((part, index) => <tr
                                    key={part._id}
                                >

                                    <th>{index + 1}</th>
                                    <td className='p-0'> <div class="avatar">
                                        <div class="w-12 rounded">
                                            <img src={part.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{part.name}</td>
                                    <td>{part.ordered_quantity}</td>
                                    <td>{part.available}</td>
                                    <td>{part.price}$</td>
                                    <td> <Link to='/dashboard/add' className='btn btn-xs btn-accent'>Update</Link>
                                    </td>
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
                    parts && <DeletingModalParts
                        parts={parts}
                        setParts={setParts}
                    >
                    </DeletingModalParts>

                }
            </div>

        </div>
    );
};

export default ManageParts;