import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {


        const profile =
        {

            name: data.name,
            email: data.email,
            education: data.education,
            city: data.city,
            phone: data.number,
            linkedin: data.linkedin



        }

        fetch(' http://localhost:5000/profiles', {

            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success('Profile added successfully')
            });


    };

    return (
        <div className='bg-[#677E81] py-10 h-screen'>
            <h1 className='text-2xl text-center text-warning mb-3 uppercase'>Please add your profile</h1>
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

                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email?.message}</span>}
                        </label>

                    </div>

                    <div className="form-control">


                        <textarea
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Education is Required'
                                },

                            })}
                            type="education"
                            placeholder="Enter your education"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-warning">{errors.education?.message}</span>}

                        </label>

                    </div>

                    <div className="form-control">


                        <input
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: 'City/Town is Required'
                                },

                            })}
                            type="text"
                            placeholder="Enter your city/town"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-warning">{errors.city?.message}</span>}

                        </label>

                    </div>

                    <div className="form-control">



                        <input
                            {...register("number", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter your phone number"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.number?.type === 'required' && <span className="label-text-alt text-warning">{errors.number?.message}</span>}

                        </label>

                    </div>

                    <div className="form-control">



                        <input
                            {...register("linkedin", {
                                required: {
                                    value: true,
                                    message: 'LinkedIn profile link is Required'
                                },

                            })}
                            type="text"
                            placeholder="Enter your linkedIn profile link "
                            className="input input-bordered" />

                        <label className="label">
                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-warning">{errors.linkedin?.message}</span>}

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

export default MyProfile;