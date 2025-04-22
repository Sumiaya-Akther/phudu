import React from 'react';

const BookingCard = ({bookedDoctors, data ,cancelBooking}) => {
console.log(bookedDoctors);

    //const { name, education, speciality, fee } = doctor;
    return (

        <div>
            {
                bookedDoctors.map(b=>  <div className='bg-white p-10 rounded-2xl shadow-sm'>
                    <div className='flex justify-between'>
                        <div>
                        <h1>{data.name}</h1>
                        <p>{data.education},{b.speciality}</p>
                        </div>
                        <p>Appointment Fee: {data.fee}</p>
                    </div>
                    <div>
                    <button onClick={cancelBooking} className="bg-red-500 text-white px-4 py-1 rounded w-full hover:bg-red-600">Cancel</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BookingCard;