import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import bg from '../../Assets/others/bicycle.jpg'
import google from '../../Assets/svg/google-icon-logo-svgrepo-com.svg'
import faceBook from '../../Assets/svg/facebook-svgrepo-com.svg'
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail, sendingPR] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit ,getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser || fUser) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading || fLoading ||sendingPR) {
        return <Loading></Loading>
    }

    if (error || gError || fError) {
        signInError = <small className='text-red-500'>{error?.message || gError?.message}</small>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div  style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl border-2 border-primary-focus">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-primary">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full max-w-xs shadow rounded-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please provide a valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full max-w-xs shadow rounded-full"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 Characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                    <button onClick={async () => {

                                        const email = getValues("email");
                                        await sendPasswordResetEmail(email);
                                        toast('Sent email.Please Check your email.');

                                    }} className="label-text-alt link link-hover text-secondary">Forgot password?</button>
                                </label>
                            </div>

                            {signInError}
                            <input className='btn btn-primary rounded-full w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>
                        <p><small>New to Mountain Bike? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <div className='flex justify-evenly items-center bg-primary p-2 rounded-full shadow-lg'>
                            <div>
                                <img onClick={() => signInWithGoogle()} className='w-7 h-7 cursor-pointer' src={google} alt="" />
                            </div>
                            <div>
                                <img onClick={() => signInWithFacebook()} className='w-8 h-8 cursor-pointer' src={faceBook} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;