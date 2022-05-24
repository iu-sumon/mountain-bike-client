import React from 'react';
import p2 from '../../Assets/others/capabilitie.png'


const Capabilities = () => {

    return (
        <div>
            <div className='grid justify-items-center items-center grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h1 className='md:text-6xl text-4xl text-center mb-5'>Our Capabilities</h1>
                    <p className='text-xl p-5'>Our bicycles have obtained certificates issued by quality inspection agencies such as ISO9901, SGS, CE, etc. Our products are sold to various countries around the world and look forward to working with you.</p>
                </div>
                <div>
                    <img src={p2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Capabilities;