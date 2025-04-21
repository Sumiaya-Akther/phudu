import React from 'react';
import Doctor from '../Doctor/Doctor';

const BestDoctors = ({data}) => {
    //console.log(data);
    
    return (
        <div className='my-20'>
            <div className='text-center space-y-4'>
            <h1 className='font-bold text-3xl'>
            Our Best Doctors
                </h1>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                data.map((doctor)=><Doctor key={doctor.registration_number} doctor={doctor}></Doctor>)
              }
              </div>

              <div className='flex justify-center my-5'>
            <button className="btn btn-active btn-primary rounded-4xl text-xl bg-[#176ae5]">View All Doctors</button>
            </div>
        </div>
    );
};

export default BestDoctors;