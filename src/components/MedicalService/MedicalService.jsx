import React from 'react';
import CountUp from 'react-countup';
import img1 from '../../assets/success-doctor.png';
import img2 from '../../assets/success-review.png';
import img3 from '../../assets/success-patients.png';
import img4 from '../../assets/success-staffs.png';

const MedicalService = () => {
    return (
        <div>
            <div className='text-center space-y-4'>
            <h1 className='font-bold text-3xl'>
            We Provide Best Medical Services
                </h1>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>   
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-around items-center py-8">
      <div className="bg-white rounded-2xl space-y-3 px-10 py-8 flex flex-col justify-center items-center">
      <img className='w-8' src={img1} alt="" />
        <div className="text-3xl font-bold">
          <CountUp end={199}
          duration={25} />+
        </div>
        <div className=" text-gray-600">Total Doctors</div>
      </div>

      <div className="bg-white rounded-2xl space-y-3 px-10 py-8 flex flex-col justify-center items-center">
      <img className='w-8' src={img2} alt="" />
        <div className="text-3xl font-bold">
          <CountUp end={467}
          duration={25} />+
        </div>
        <div className=" text-gray-600">Total Reviews</div>
      </div>

      <div className="bg-white rounded-2xl space-y-3 px-10 py-8 flex flex-col justify-center items-center">
      <img className='w-8' src={img3} alt="" />
        <div className="text-3xl font-bold">
          <CountUp end={1900}
          duration={25} />+
        </div>
        <div className=" text-gray-600">Patients</div>
      </div>

      <div className="bg-white rounded-2xl space-y-3 px-10 py-8 flex flex-col justify-center items-center">
        <img className='w-8' src={img4} alt="" />
        <div className="text-3xl font-bold">
          <CountUp end={300}
          duration={25}
          />+
        </div>
        <div className=" text-gray-600">Total Stuffs</div>
      </div>
    </div>
        </div>
    );
};

export default MedicalService;