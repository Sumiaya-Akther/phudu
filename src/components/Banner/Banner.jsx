import React from 'react';
import bannerImg from '../../assets/banner-img-1.png';

const Banner = () => {
    return (
        <div className='bg-linear-to-t from-[#fefefe] to-[#f1f1f1] py-18 px-26 border-2 border-r-white  border-t-neutral-content border-b-neutral-content border-l-white rounded-2xl'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-3xl'>
                Dependable Care, Backed by Trusted <br />Professionals.
                </h1>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <form className='flex flex-col md:flex-row justify-center items-center gap-3 mb-3'>
                <input className='w-1/3 py-1 px-3 rounded-2xl bg-white border border-gray-300 shadow-md focus:outline-none focus:shadow-outline' type="text" placeholder='Search any doctor...' />
                <button className="btn  btn-primary p-3 rounded-4xl">Search Now</button>
                </form>
                <div className='flex flex-col lg:flex-row gap-3 mt-8'>
                    <img className='rounded-2xl w-auto' src={bannerImg} alt="" />
                    <img className='rounded-2xl w-auto' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;