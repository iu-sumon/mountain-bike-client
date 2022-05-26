import React from 'react';
import a1 from '../../Assets/achievement/1_170x144.png'
import a2 from '../../Assets/achievement/2_170x144.png'
import a3 from '../../Assets/achievement/3_170x144.png'
import a4 from '../../Assets/achievement/4_170x144.png'
const Achievement = () => {
    return (
        <div className='md:w-[70%] mx-auto my-[80px]'>
            <h1 className='text-3xl uppercase font-semibold text-primary text-center'>Our Achievements</h1>
            <div className='card grid grid-cols-1 md:grid-cols-4 border m-5 rounded-xl shadow-lg '>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a1} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5 text-center'>13 years of manufacturing</p>
                    <p className='text-[15px] text-justify'>MNFT was established in 2005 and provides bicycle OEM services.We have 13 years of bicycle manufacturing and exporting experience.</p>
                </div>
                <div className='hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a2} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5 text-center'>80,000 square<br/> meters</p>
                    <p className='text-[15px] text-justify'>The factory covers an area of more than 80,000 square meters, has more than 500 employees. Has a number of automatic bicycle welding, spraying, decals, assembly, packaging production line.</p>
                </div>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a3} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5 text-center'>More than 500 employees</p>
                    <p className='text-[15px] text-justify'>500 employees. Has a number of automatic bicycle welding, spraying, decals, assembly, packaging production line..</p>
                </div>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a4} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5 text-center'>Quality <br /> inspection</p>
                    <p className='text-[15px] text-justify'>A quality inspection involves measuring, examining, testing, or gauging various characteristics of a product and comparing those results with specified requirements to determine whether there is a conformity.  </p>
                </div>
               
            </div>
        </div>
    );
};

export default Achievement;