import React from 'react';

const Banner = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">Rent
                    <span className="dark:text-violet-600"> a </span>car
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                    <br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Banner;