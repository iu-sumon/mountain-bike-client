import React from 'react';

const HomePartsCard = ({ part }) => {

    const { name, img, price, ordered_quantity, description, available } = part;
    return (
        <div>
            <div>
                <div className="card shadow border ">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="rounded-xl shadow " />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-center uppercase">{name}</h2>
                        <p className='text-justify'>{description.slice(0, 100)}</p>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Price</small>
                            <small>{price}</small>
                        </div>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Ordered Quantity</small>
                            <small>{ordered_quantity}</small>
                        </div>
                        <div className='flex justify-between items-center text-[18px] font-bold'>
                            <small>Available</small>
                            <small>{available}</small>
                        </div>

                        <div className="card-actions mt-3 mx-auto">
                            <button className="btn bg-blue-900 rounded-full px-10">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePartsCard;