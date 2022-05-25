import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
            </div>
            <div className="drawer-side">

                <label for="dashboard-sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 overflow-y-auto w-50 text-center">


                    <li className='mb-3 font-bold btn  btn-primary rounded-full text-center'><Link to="/dashboard">My Orders</Link></li>

                    <li className='mb-3  font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/review">Add Review</Link></li>

                    <li className='mb-3 font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/profile">My Profile</Link></li>

                    <li className='mb-3  font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/add">Add Parts</Link></li>

                    <li className='mb-3 font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/make">Make Admin</Link></li>

                    <li className='mb-3  font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/orders">Manage Orders</Link></li>

                    <li className='mb-3 font-bold btn btn-primary rounded-full text-center'><Link to="/dashboard/parts">Manage Parts</Link></li>

                </ul>

            </div>
        </div>


    );
};

export default Dashboard;