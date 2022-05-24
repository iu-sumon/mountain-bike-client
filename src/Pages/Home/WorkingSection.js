import React from 'react';
import p1 from '../../Assets/others/do.PNG'


const WorkingSection = () => {

    return (
        <div>
            <div className='grid justify-items-center items-center grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <img src={p1} alt="" />
                </div>
                <div>
                    <h1 className='md:text-5xl text-4xl text-center mb-5 uppercase'>How we do it</h1>
                    <p className='text-xl p-5'>MNFT was established in 2005 and provides bicycle OEM services. We have 13 years of bicycle manufacturing and exporting experience. The factory covers an area of more than 80,000 square meters, has more than 500 employees. Has a number of automatic bicycle welding, spraying, decals, assembly, packaging production line.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkingSection;