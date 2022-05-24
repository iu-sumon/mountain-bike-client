import React from 'react';
import { Link } from 'react-router-dom';

const HomePartsCard = ({ part }) => {

    const { _id, name, img, price, ordered_quantity, description, available } = part;
    return (
        <div>
            <div>
                <div
                    data-aos="zoom-in"
                    className="card shadow border ">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="rounded-xl shadow " />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-center uppercase">{name}</h2>
                        <p className='text-justify' title={description}>{description.length >120 ?description.slice(0,120) +'.....Read More' : description }</p>
                        <p><span className='text-4xl'>${price}</span> (Per parts price)</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
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
                            <Link to={`/purchasePage/${_id}`} className="btn bg-blue-900 rounded-full px-10">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePartsCard;