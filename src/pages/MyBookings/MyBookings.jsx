
import { Link, useLoaderData } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getBookings, removeBooking } from '../Utilities';
import Rechart from '../../components/ReChart/Rechart';

const MyBookings = () => {
    const data = useLoaderData();

    const [bookedDoctors, setBookedDoctors] = useState([]);


    useEffect(() => {
        const bookedIds = getBookings();
        const selectedDoctors = data.filter(doctor =>
            bookedIds.includes(doctor.registration_number)
        );
        setBookedDoctors(selectedDoctors);
    }, [data]);

    const cancelBookings = id => {
        removeBooking(id)
        setBookedDoctors((getBookings()))
    };



    return (
        <div>
            {
                bookedDoctors.length === 0 ? (

                    <div className="text-center mt-20">
                        <h2 className="text-xl font-semibold text-gray-600 mb-4">You have no booked any appointment yet!</h2>
                        <p className="text-sm p-2 text-gray-500">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        <Link to="/">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-4">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                ) : (

                    <div className='p-5 space-y-8'>
                        {/* Chart First */}
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Appointment Overview</h2>
                            <Rechart data={data}></Rechart>
                        </div>

                        {/* Cancel Card Section */}
                        <div>
                            <div className='text-center'>
                            <h2 className='text-2xl font-bold mb-4'>My Today Appointments</h2>
                            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                            </div>
                            
                                <div className='flex flex-col gap-5 space-y-5'>
                                    {bookedDoctors.map((doctor, index) => (
                                        <div key={index} className='bg-white p-8 rounded-xl shadow-md'>
                                            <div>
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h3 className='font-bold'>{doctor.name}</h3>
                                                        <p>{doctor.speciality}</p>
                                                    </div>
                                                    <div>
                                                        <p>Appointment Fee: {doctor.fee}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => cancelBookings(doctor.registration_number)}
                                                    className='btn btn-sm btn-outline w-full rounded-4xl btn-error mt-5'
                                                >
                                                    Cancel Appointment
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyBookings;