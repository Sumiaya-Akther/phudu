import React from 'react';

const BookingCard = ({bookedDoctors, cancelBookings}) => {
//console.log(bookedDoctors);


    return (

        <div className='p-5 space-y-8'>
                        {/* Chart First */}
                        {/* <div>
                            <h2 className='text-2xl font-bold mb-4'>Appointment Overview</h2>
                            <Rechart data={data}></Rechart>
                        </div> */}
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
    );
};

export default BookingCard;