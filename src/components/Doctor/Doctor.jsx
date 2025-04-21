import React from 'react';
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from 'react-router';


const Doctor = ({doctor}) => {
    //console.log(doctor)
    const {name, education, speciality, experience, registration_number, designation, workplace, fee, image} = doctor;
    return (
        <div>
        <div className="card bg-base-100 shadow-sm p-5">
            <figure>
                <img className='w-62 h-56 rounded-2xl'
                    src={image}
                    alt="doctor pic" />
            </figure>
            <div className="card-body">
                <div className='flex gap-5'>
                <button className="btn btn-outline btn-success rounded-4xl btn-sm">Available</button>
                <button className="btn btn-outline btn-primary rounded-4xl btn-sm">{experience} experience</button>
                </div>
                <h2 className="card-title text-2xl">
                    {name}
                </h2>
                <p className='text-gray-500 text-[17px] pb-4 border-gray-400 border-b-2 border-dashed'>{education},{speciality}</p>
                <div className="card-actions py-4">
                    <p className='flex items-center gap-2 text-gray-500 text-[20px]'><RiRegisteredLine />{registration_number}
                    </p>
                </div>
                <Link to={`/doctorDetails/${registration_number}`}>
                <button className="btn btn-outline btn-info text-xl font-bold w-full rounded-4xl">View Details</button>
                </Link>
            </div>
           
        </div>
        </div>
    );
};

export default Doctor;