import React from 'react';
import Photo from '../../Assets/others/AAA0752_copy_1_300x300-removebg-preview.png'
const Portfolio = () => {
    return (
        <div>
            <div className='bg-[#0183B5]'>
                <div class="card">
                    <figure class="pt-10">
                        <img src={Photo} alt="Shoes" class="rounded-xl border-2 p-2" />
                    </figure>
                    <div class="card-body mx-auto">
                        <div className='text-center text-white'>
                            <h2 class="text-2xl font-bold text-black">Md. Sumon Mia</h2>
                            <p className='text-sm font-semibold '>MERN Stack Web Developer</p>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Address</h5>
                                <p><span className='font-semibold'>Home:</span> Rangpur, Bangladesh</p>
                                <p><span className='font-semibold'>Phone:</span> (+88) 01571-439227</p>
                                <p><span className='font-semibold'>Email:</span> md.sumonmia.cse.iu@gmail.com</p>

                            </div>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Education</h5>
                                <p><span className='font-semibold'>(B.Sc.):</span> CSE –2017(Passing year-2019)</p>
                                <p><span className='font-semibold'>(M.Sc.):</span> CSE –2018(Passing year-2021)</p>
                                <p className='font-semibold'>Islamic University,Kushtia, Bangladesh</p>
                            </div>

                            <div>
                                <h5 className='font-semibold underline text-black'>Skill Highlights</h5>
                                <p><span className='font-semibold'>Expertise:</span> JavaScript, ES6, REST API, React, React Router, React Hook, SPA, HTML5, CSS3, SCSS,Bootstrap-5.</p>
                                <p><span className='font-semibold'>Comfortable:</span> Node.js, MongoDB, Firebase, Express.js</p>
                                <p><span className='font-semibold'>Tools:</span> GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Photoshop, Figma</p>
                                <p><span className='font-semibold'>Personal Skills:</span> Leadership, Project Management, Team Work, Organizing, Negotiation</p>

                            </div>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Projects</h5>
                                <p><span className='font-semibold'>Warehouse-management: </span><span className='link'>https://electronics-store-client.web.app/</span> </p>
                                <p><span className='font-semibold'>Independent-service-provider: </span><span className='link'>https://my-doctor-8532c.web.app/</span> </p>
                                <p><span className='font-semibold'>Lucky-one: </span><span className='link'>https://cosmic-phoenix-a7ebc5.netlify.app/</span> </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;