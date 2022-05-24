import React from 'react';
import useParts from '../../hooks/useParts';
import HomePartsCard from './HomePartsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const HomeParts = () => {
    const [parts] = useParts()
    let getParts=parts.slice(0,6)

//...............................AOS Animation function................................//
useEffect(() => {
    AOS.init();
}, []);



    return (
        <div  className='md:w-[70%] mx-auto my-[80px]'>
             <h1 className='text-3xl uppercase font-semibold text-primary mb-5 text-center'>Our Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    getParts.map(part => <HomePartsCard
                     part={part}
                     key={part._id}

                    ></HomePartsCard>)
                }
            </div>
        </div>
    );
};

export default HomeParts;