import React from 'react';
import { useNavigate } from 'react-router';

const SingleCar = ({car}) => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
            <img alt="" src={car.company.logo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{car.company.name}</a>
                <span className="text-xs dark:text-gray-600">4 hours ago</span>
            </div>
        </div>
        <div>
            <img src={car.vehicle
.photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
            <p className="text-sm dark:text-gray-600">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100" onClick={()=>navigate(`/cardetails/${car.vehicle.id}`)}>Details</button>
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-600">
                <button type="button" className="flex items-center p-1 space-x-1.5">
                    
                    <span>Year: {car.vehicle.year}</span>
                </button>
                <button type="button" className="flex items-center p-1 space-x-1.5">
                    🤑
                    <span>{car.vehicle.daily_rate}</span>
                </button>
            </div>
        </div>
    </div>
    );
};

export default SingleCar;