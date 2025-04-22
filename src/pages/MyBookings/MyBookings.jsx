
import { Link, useLoaderData } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getBookings, removeBooking } from '../Utilities';
import BookingCard from '../../components/BookingCard/BookingCard';
import EmptyCard from '../../components/EmptyCard/EmptyCard';

const MyBookings = () => {
    const data = useLoaderData();

    const [bookedDoctors, setBookedDoctors] = useState([]);


    useEffect(() => {
        const bookedIds = getBookings();
        const selectedDoctors = data.filter(doctor =>
            bookedIds.includes(doctor.registration_number)
        );
        setBookedDoctors(selectedDoctors);
    }, []);

    const cancelBookings = id => {
        removeBooking(id)
        const removeItems = bookedDoctors.filter((doctor)=> doctor.registration_number !==id)
        setBookedDoctors(removeItems)
    };

    // if(bookedDoctors.length < 1){
    //     return <EmptyCard></EmptyCard>
    // }


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

                    <BookingCard cancelBookings={cancelBookings} bookedDoctors={bookedDoctors}></BookingCard>
                )
            }
        </div>
    );
};

export default MyBookings;