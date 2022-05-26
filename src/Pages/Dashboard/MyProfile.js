import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '7bcaf5b178582ea0a1308db59afec8a0'


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

                    const profile =
                    {

                        name: data.name,
                        email: data.email,
                        education: data.education,
                        city: data.city,
                        phone: data.number,
                        linkedin: data.linkedin,
                        image: img

                    }

                    const url = `   https://evening-temple-70912.herokuapp.com/profile?email=${data.email}`;
                    fetch(url, {

                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(profile),
                    })
                        .then((res) => {
                            return res.json()
                        })
                        .then(data => {
                            toast.success('Profile update successfully')
                            reset();
                        })

                }
            })


    };

    return (
        <div className='bg-[#677E81] py-10 h-screen'>
            <h1 className='text-2xl text-center text-white mb-3 uppercase'>Please update your profile</h1>
            <div className='w-[40%]  mx-auto card shadow-2xl border md:p-10 p-3'>
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
                            value={user?.displayName}
                            readOnly
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
                            value={user?.email}
                            readOnly
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
                        <input type="Submit" value='Update profile' className="btn text-white px-12 rounded-full" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default MyProfile;