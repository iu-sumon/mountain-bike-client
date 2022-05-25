import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">

            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">


                <h2 className='md:text-4xl text-xl font-bold text-purple-500 text-center mb-5 mt-5'>Welcome to Your Dashboard</h2>


                <Outlet />


            </div>
            <div className="drawer-side">

                <label for="dashboard-sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard">My Orders</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/review">Add Review</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/profile">My Profile</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/add">Add Parts</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/make">Make Admin</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/orders">Manage Orders</Link></li>

                    <li className='mb-3 uppercase font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/parts">Manage Parts</Link></li>

                </ul>

            </div>
        </div>


    );
};

export default Dashboard;