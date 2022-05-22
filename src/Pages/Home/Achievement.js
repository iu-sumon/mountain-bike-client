import React from 'react';
import a1 from '../../Assets/achievement/1_170x144.png'
import a2 from '../../Assets/achievement/2_170x144.png'
import a3 from '../../Assets/achievement/3_170x144.png'
import a4 from '../../Assets/achievement/4_170x144.png'
const Achievement = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <h1 className='text-3xl uppercase font-semibold text-primary mt-5'>Our Achievement</h1>
            <div className='card grid grid-cols-1 md:grid-cols-4 border m-5 rounded-xl shadow-lg'>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a1} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5'>13 years of manufacturing</p>
                    <p className='text-[15px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab eos cum voluptatibus. Voluptate tempora impedit a amet consequuntur consectetur veritatis mollitia eligendi beatae maxime dignissimos laboriosam ducimus deserunt, iure voluptatum rem aperiam quae sequi expedita quis.</p>
                </div>
                <div className='hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a2} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5'>80,000 square<br/> meters</p>
                    <p className='text-[15px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab eos cum voluptatibus. Voluptate tempora impedit a amet consequuntur consectetur veritatis mollitia eligendi beatae maxime dignissimos laboriosam ducimus deserunt, iure voluptatum rem aperiam quae sequi expedita quis.</p>
                </div>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a3} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5'>More than 500 employees</p>
                    <p className='text-[15px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab eos cum voluptatibus. Voluptate tempora impedit a amet consequuntur consectetur veritatis mollitia eligendi beatae maxime dignissimos laboriosam ducimus deserunt, iure voluptatum rem aperiam quae sequi expedita quis.</p>
                </div>
                <div className=' hover:bg-sky-700 hover:text-white p-3'>
                    <img className='mx-auto shadow-lg my-3 rounded-2xl border border-primary' src={a4} alt="" />
                    <p className='text-xl uppercase font-semibold mb-5'>Quality <br /> inspection</p>
                    <p className='text-[15px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab eos cum voluptatibus. Voluptate tempora impedit a amet consequuntur consectetur veritatis mollitia eligendi beatae maxime dignissimos laboriosam ducimus deserunt, iure voluptatum rem aperiam quae sequi expedita quis.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Achievement;