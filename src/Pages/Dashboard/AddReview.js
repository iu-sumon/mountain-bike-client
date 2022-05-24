import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {


        const review =
        {

            name: data.name,
            review: data.review,
            img: data.image,
            ratings: data.ratings



        }

        fetch(' http://localhost:5000/reviews', {

            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success('Review added successfully')
            });

 
    };

 return (
        <div className='bg-[#677E81] py-10 h-screen'>
            <h1 className='text-2xl text-center text-warning mb-3 uppercase'>Please add a review </h1>
            <div className='w-[30%] mx-auto card shadow-2xl border md:p-10 p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">

                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                            type="name"
                            placeholder="Enter your name"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">


                        <textarea
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is Required'
                                },

                            })}
                            type="review"
                            placeholder="Enter your review"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-warning">{errors.review?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">


                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                },

                            })}
                            type="text"
                            placeholder="Enter your image link"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-warning">{errors.image?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">



                        <input
                            {...register("ratings", {
                                required: {
                                    value: true,
                                    message: 'Ratings is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter your ratings"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.ratings?.type === 'required' && <span className="label-text-alt text-warning">{errors.ratings?.message}</span>}

                        </label>

                    </div>

                    <div className='text-center'>
                        <input type="Submit" value='add' className="btn text-white px-12 rounded-full" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReview;