import React from 'react';
import s1 from '../../Assets/slider/s1.jpeg'
import s2 from '../../Assets/slider/s2.jpeg'
import s3 from '../../Assets/slider/s3.jpeg'
import s4 from '../../Assets/slider/s4.jpeg'
import s5 from '../../Assets/slider/s5.jpeg'

const Banner = () => {
    return (
        <div className='bg-lime-200'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={s2} className="w-[1000px] mx-auto" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={s1} className="w-[1000px] mx-auto" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={s3} className="w-[1000px] mx-auto" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={s4} className="w-[1000px] mx-auto" alt='' />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={s5} className="w-[1000px] mx-auto" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs btn-primary">1</a>
                <a href="#item2" className="btn btn-xs btn-primary">2</a>
                <a href="#item3" className="btn btn-xs btn-primary">3</a>
                <a href="#item4" className="btn btn-xs btn-primary">4</a>
                <a href="#item5" className="btn btn-xs btn-primary">5</a>
            </div>
        </div>
    );
};

export default Banner;