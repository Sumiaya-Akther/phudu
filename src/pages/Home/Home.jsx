import React from 'react';
import Banner from '../../components/Banner/Banner';
import BestDoctors from '../../components/BestDoctors/BestDoctors';
import { useLoaderData } from 'react-router';
import MedicalService from '../../components/MedicalService/MedicalService';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <BestDoctors data={data}></BestDoctors>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;