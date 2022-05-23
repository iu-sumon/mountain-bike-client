import React from 'react';

const Brand = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div>
            <div className="card bg-base-100 shadow border border-primary font-serif">
                <div className="p-2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </div>
                <div className="card-body items-center text-center">

                    <h2 className="card-title uppercase">{name}</h2>

                </div>
            </div>
        </div>
    );
};

export default Brand;