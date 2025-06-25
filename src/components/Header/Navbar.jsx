import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold border-1 border-cyan-900 p-2 rounded" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myBookings"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold border-1 border-cyan-900 p-2 rounded" : ""
                                    }
                                >
                                    My-Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold border-1 border-cyan-900 p-2 rounded" : ""
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pageRead"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-900 font-bold border-1 border-cyan-900 p-2 rounded" : ""
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <h1 className="btn btn-ghost text-xl flex items-center"><img className='w-8' src={logo} alt="" />  Phudu</h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600 space-x-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold border-b-2 border-cyan-900 p-2" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myBookings"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold border-b-2 border-cyan-900 p-2" : ""
                                }
                            >
                                My-Bookings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-900 font-bold border-1 border-cyan-900 p-2 rounded" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn  btn-primary rounded-4xl">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;