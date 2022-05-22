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
        <div>
            <div>
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