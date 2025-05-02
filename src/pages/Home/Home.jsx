import React from 'react';
import Banner from '../../component/Banner/Banner';
import { useLoaderData } from 'react-router';
import SingleCar from '../../component/SingleCar/SingleCar';


const Home = () => {
    const data = useLoaderData()


    return (
       <>
        <Banner></Banner>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                data.map(car=> <SingleCar key={car.vehicle.id} car={car}></SingleCar>)
            }
        </div>
       </>
    );
};

export default Home;