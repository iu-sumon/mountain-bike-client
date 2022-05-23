import React from 'react';

const Brand = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div>
            <div class="card bg-base-100 shadow border border-primary font-serif">
                <div class="p-2">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </div>
                <div class="card-body items-center text-center">

                    <h2 class="card-title uppercase">{name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default Brand;