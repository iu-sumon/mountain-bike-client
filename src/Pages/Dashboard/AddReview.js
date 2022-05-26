import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '0a59feb260123c2fe0c722a3e3da90f9';

    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {

                    const img = result.data.url;

                    const review =
                    {

                        name: data.name,
                        review: data.review,
                        img: img,
                        ratings: data.ratings
                    }
                    if (data.ratings > 5 || data.ratings < 1) {
                        toast('Please provide rating between 1 to 5')
                        return;
                    }
                    fetch(' http://localhost:5000/reviews', {

                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(review),
                    })
                        .then((res) => res.json())
                        .then(inserted => {

                            if (inserted.insertedId) {

                                toast.success('Review added successfully')

                                reset();
                            }

                            else {
                                toast.error('Failed to add the review');
                            }
                        })

                }
            })

    };

    return (
        <div className='bg-[#677E81] py-10 h-screen'>
            <h1 className='text-2xl text-center text-white mb-3 uppercase'>Please add a review </h1>
            <div className='w-[30%] mx-auto card shadow-2xl border md:p-10 p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Name</span>
                        </label>
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
                        <label className="label">
                            <span className="label-text text-white font-semibold">Review</span>
                        </label>

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

                        <label className="label">
                            <span className="label-text text-white font-semibold">Ratings</span>
                        </label>

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

                    <div className="form-control ">

                        <label class="block">
                            <span class="sr-only">Choose profile photo</span>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    },

                                })}
                                type="file"
                                class="text-sm text-white text-bold 
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100"/>
                        </label>

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-warning">{errors.image?.message}</span>}

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