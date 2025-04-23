import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/errorImg.jpeg';

const ErrorPage2 = () => {
    return (
        <div>
            <div className="max-w-md w-full p-6 bg-white rounded-xl
            flex flex-col items-center justify-center shadow-lg mt-20 mx-auto">
                <img className='w-52' src={errorImg} alt="" />
                <p className='text-2xl font-bold mb-6'>No Details Found</p>
                <Link 
                    to="/" 
                    className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    View All Doctor
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage2;