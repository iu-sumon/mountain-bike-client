import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo-1.jpg'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>

        <li className='font-semibold mr-3'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-3'><Link to='/all-parts'>Parts</Link></li>
        <li className='font-semibold mr-3'><Link to='/blogs'>Blogs</Link></li>
        <li className='font-semibold mr-3'><Link to='/about'>About</Link></li>
        <li className='font-semibold mr-3'><Link to='/contact'>Contact</Link></li>
        {
            user ? <li onClick={logout} className='font-semibold mr-3'><Link to='/login'>SingOut</Link></li>
                :
                <li className='font-semibold mr-3'><Link to='/login'>Login</Link></li>
        }
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
                    <Link to='/' className="btn btn-primary">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;