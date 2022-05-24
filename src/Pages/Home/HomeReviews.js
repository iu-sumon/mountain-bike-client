import React from 'react';
import useReviews from '../../hooks/useReviews';
import HomeReviewCard from './HomeReviewCard';
 

const HomeReviews = () => {
    const [reviews]=useReviews()
    
    return (
        <div className='bg-[#161E35] py-5'>
        <h1 className='text-4xl text-white text-center'>Dealers Reviews</h1>
        <div className='grid md:grid-cols-3 justify-center items-center md:w-[70%] mx-auto gap-5 my-10  px-3 py-3 rounded'>
            {
                reviews.map(r => <HomeReviewCard
                    r={r}
                    key={r.id}

                ></HomeReviewCard>)
            }
        </div>    
        </div>
    );
};

export default HomeReviews;