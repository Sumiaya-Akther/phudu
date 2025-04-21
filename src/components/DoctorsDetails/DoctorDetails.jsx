import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiRegisteredLine } from "react-icons/ri";

const DoctorDetails = () => {
    
    const { id } = useParams();
    //const doctorId = parseInt(id);
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.registration_number === id);
    const {name, education, speciality, experience, availability, registration_number, designation, workplace, fee, image} = singleDoctor;
    return (
        <div>
            <div className='bg-white rounded-2xl p-10 text-center my-5'>
                <h1 className='font-bold text-4xl mb-3'>Doctor’s Profile Details</h1>
                <p>"A doctor works to protect people's health and well-being. They diagnose illnesses in the sick, provide appropriate treatment, advise on ways to prevent diseases, and offer guidance on healthy living. Furthermore, they provide rapid care and save lives in any health-related emergency."</p>
            </div>
            <div className='bg-white rounded-2xl p-10 my-5 mb-5 flex flex-col md:flex-row gap-5'>
                <div>
                    <img className='w-60' src={image} alt="" />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-3xl'>{name}</h1>
                    <p className='text-gray-500 text-[18px]'>{education}</p>
                    <p className='text-gray-500 text-[18px]'>{speciality}</p>
                    <p className='text-gray-500 text-[18px]'>Working at:<br /><span className='font-bold text-black text-sm'>{workplace}</span></p>
                    <div className='border-1 border-dashed border-gray-300 '></div>
                     <p className='text-gray-500 text-[18px] flex gap-2 items-center'>
                        <RiRegisteredLine /> Reg No: {registration_number}
                     </p>
                     <div className='border-1 border-dashed border-gray-300 '></div>
                     <p className='text-black font-semibold text-[18px] flex gap-2 items-center'>Availability :
                     {
                        availability.map((availability, index) => 
                            <button key={availability.id || index} className="btn btn-sm btn-outline rounded-3xl btn-warning">{availability}</button>)
                    }
                     </p>
                     <p className='text-blue-700 flex gap-2'><span className='text-black font-semibold text-[18px]'>Consultation Fee: </span> {fee}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;