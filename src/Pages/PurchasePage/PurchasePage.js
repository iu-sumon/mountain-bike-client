import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {

    const { id } = useParams()

    const [part, setPart] = useState({}) // every single product is an object

    useEffect(() => {

        fetch(`http://localhost:5000/purchasePage/${id}`)

            .then(res => res.json())
            .then(data => setPart(data))

    }, [id])

    return (
        <div className='w-[50%] mx-auto my-16'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="card shadow border ">

                    <figure className="px-10 pt-10">
                        <img src={part.img} alt="" className="rounded-xl shadow border" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-center uppercase">{part.name}</h2>
                        <p className='text-justify'>{part?.description?.slice(0, 100)}</p>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Price</small>
                            <small>{part.price}</small>
                        </div>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Ordered Quantity</small>
                            <small>{part.ordered_quantity}</small>
                        </div>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Available</small>
                            <small>{part.available}</small>
                        </div>

                    </div>
                </div>
                <div>
                    <form className='grid grid-cols-1 justify-items-center my-3'>

                        <input type="name" name='name'  className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="name" name='email'  className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="number" name='ordered Quantity' className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="number" name='available Quantity' className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="text" name='street'  placeholder="Enter your street" className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="text" name='city'  placeholder="Enter your city" className="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="number" name='number'  placeholder="Enter your  number" className="input input-bordered w-full max-w-xs mb-2 shadow" />

                        <input type="submit" className="btn btn-secondary w-full max-w-xs mt-5 shadow" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;