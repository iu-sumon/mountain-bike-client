import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../Assets/logo/logo-1.jpg'
import userPhoto from '../../Assets/usericon/icons8-user-100.png'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const logout = () => {
        signOut(auth);
        toast('SignOut Successfully')
    };
    const menuItems = <>

        <li className='font-semibold mr-3'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-3'><Link to='/all-parts'>Parts</Link></li>
        <li className='font-semibold mr-3'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='font-semibold mr-3'><Link to='/portfolio'>Portfolio</Link></li>
        <li className='font-semibold mr-3'><Link to='/blogs'>Blogs</Link></li>
    </>




    return (
        <div>
            <div className="navbar bg-primary px-12">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItems}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-20 rounded-xl">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>



                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal  text-white">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown dropdown-hover dropdown-end">

                        <label tabIndex="0">

                            <div className="avatar">

                                <div className="text-center text-white text-xl bg-primary leading-tight z-10 rounded-full w-16  h-16 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">
                                    <img src={user?.photoURL ? user?.photoURL : userPhoto} alt={user?.displayName} />
                                </div>

                            </div>

                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-52 h-52">
                            <p className='text-center mb-5 font-bold'>{user?.displayName}</p>
                            {
                                user ? <p className='text-center btn rounded-full'onClick={logout}><Link to='/login'>SignOut</Link></p>
                                    :
                                    <p className='text-center btn rounded-full'><Link to='/login'>Login</Link></p>

                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;