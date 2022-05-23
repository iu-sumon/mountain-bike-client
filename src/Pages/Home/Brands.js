import React, { useEffect, useState } from 'react';
import Brand from './Brand';
const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])

    return (
        <div className='w-[70%] mx-auto my-[80px]'>
            <h1 className='text-3xl uppercase font-semibold text-primary mb-5'>Our Brands</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
               {
                   brands.map(brand=><Brand 
                   brand={brand}
                   key={brand._id}
                   ></Brand>)
               }
            </div>
        </div>
    );
};

export default Brands;