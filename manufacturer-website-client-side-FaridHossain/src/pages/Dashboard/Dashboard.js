import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import useAdmin from '../CustomHook/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className='px-12 py-8'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='flex items-center'>
                        <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>
                        <h1 className='text-3xl ml-6 md:ml-0 text-purple-700 font-bold flex gap-2'><span><FaUserTie /></span>Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">

                        <button className='btn btn-primary font-bold'> <li><Link to='/dashboard'>My Orders</Link></li></button>
                        <button className='btn btn-secondary my-2 font-bold'><li><Link to='/dashboard/addreview'>Add A Review</Link></li></button>
                        <button className='btn btn-accent text-white font-bold'><li><Link to='/dashboard/myprofile'>My Profile</Link></li></button>

                        {admin && <>
                            <button className='btn btn-success my-2 text-white font-bold'><li><Link to='/dashboard/allorder'>All OrderS</Link></li></button>
                            <button className='btn btn-secondary font-bold'><li><Link to='/dashboard/addproducts'>Add Products</Link></li></button>
                            <button className='btn mt-2 text-white font-bold'><li><Link to='/dashboard/allproducts'>Manage All Products</Link></li></button>
                            <button className='btn btn-primary mt-2 text-white font-bold'><li><Link to='/dashboard/allusers'>All Users</Link></li></button>
                        </>}

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;