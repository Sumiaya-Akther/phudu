import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data = useLoaderData();
    //console.log(data)
    return (
        <div className='my-5'>
            <div className='text-center space-y-4'>
            <h1 className='font-bold text-3xl'>
            Blogs
                </h1>
                <p className='text-[#0F0F0F] mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div>
                {
                    data?.map((qus) => <div key={qus.id}>
                        <div className='bg-white p-10 rounded-4xl mb-9'>
                            <h2>{qus.question}</h2>
                            <div className='border-1 border-gray-300 my-4'></div>
                            <p>{qus.answer}</p>
                            <div className='border-1 border-gray-300 my-4'></div>
                            <p>{qus.time}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;