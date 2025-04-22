import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import errorImg from '../../assets/errorImg.jpeg';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-md w-full p-6 bg-white rounded-xl
            flex flex-col items-center justify-center shadow-lg mt-20 mx-auto">
                <img className='w-52' src={errorImg} alt="" />
                <h1 className="text-2xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                <Link 
                    to="/" 
                    className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Back to Home
                </Link>
            </div>


           
        </div>
    );
};

export default ErrorPage;