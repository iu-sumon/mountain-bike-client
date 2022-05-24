import React from 'react';

const  HomeReviewCard = ({r}) => {
    const { name, review, img, ratings } = r;
    console.log(img);
    return (
        <div >
            <div
           
            className="max-w-sm bg-white rounded-lg  shadow-md dark:bg-gray-800  md:h-80 py-1 px-3">
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-md text-gray-600 dark:text-gray-500">Ratings: {ratings}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400" title={review}>
                    {review.length >260 ? review.slice(0,260) +'.....Read More' : review }
                    </span>

                </div>
            </div>
           
        </div>
    );
};

export default  HomeReviewCard;

<div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  
</div>