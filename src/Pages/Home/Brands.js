import React, { useEffect, useState } from 'react';
import Brand from './Brand';
import image2 from '../../Assets/others/brandBack.jpg'


const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {

        fetch(' https://evening-temple-70912.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])

    return (
        <div>
            <h1 className='text-3xl uppercase font-semibold text-primary mb-5 text-center'>Our Brands</h1>
            <div style={{ backgroundImage: `url(${image2})` }} className='bg-cover py-12 flex justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                    {
                        brands.map(brand => <Brand
                            brand={brand}
                            key={brand._id}
                        ></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;