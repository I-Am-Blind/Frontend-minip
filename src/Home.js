import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { useMediaQuery } from "react-responsive";

const Home = ({
    startDestination,
    setStartDestination,
    endDestination,
    setEndDestination,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
}) => {

    const isMobile = useMediaQuery({ maxWidth: 640 });
    const captions = [
        "Plan Your Perfect Getaway with AI Assistance",
        "Effortless Trip Planning with Intelligent AI Tech",
        "Unleash Your Wanderlust with AI-Powered Trip Planning",
        "Your Personalized Travel Guide: Powered by AI",
        "Unlock Your Dream Vacation: AI-Powered Trip Planning",
      ];


    return (
        <div className="flex flex-col sm:flex-row  items-center justify-center h-screen bg-mountain bg-cover font-main ">
            <div className="text-5xl sm:text-[5rem] font-bold text-white font-main h-64  w-full px-8 mb-16 sm:w-[40rem]  sm:justify-center sm:flex items-center">
            <Typewriter words={captions} loop={true} deleteSpeed={25} typeSpeed={50} delaySpeed={5000} />
            </div>
            <form className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="startDestination"
                    placeholder="Start Destination"
                    value={startDestination}
                    onChange={(event) => setStartDestination(event.target.value)}
                    className="px-4 py-2  rounded-2xl sm:rounded-[2rem] focus:outline-none inputs sm:w-[30rem] sm:h-[6rem] sm:text-2xl"
                />
                <input
                    type="text"
                    name="endDestination"
                    placeholder="End Destination"
                    value={endDestination}
                    onChange={(event) => setEndDestination(event.target.value)}
                    className="px-4 py-2  rounded-2xl sm:rounded-[2rem] focus:outline-none inputs sm:w-[30rem] sm:h-[6rem] sm:text-2xl"
                />
                <input
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    className="px-4 py-2  rounded-2xl sm:rounded-[2rem] focus:outline-none inputs sm:w-[30rem] sm:h-[6rem] sm:text-2xl"
                />
                <input
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    className="px-4 py-2  rounded-2xl sm:rounded-[2rem] focus:outline-none inputs sm:w-[30rem] sm:h-[6rem] sm:text-2xl"
                />               
                    <Link to='/generate'>
                    <button
                        type="submit"
                        className="px-8 py-4 text-white rounded-3xl  focus:outline-none submit hover:scale-105 ease-in-out duration-100 "
                    >
                        Start Your Journey →
                    </button>
                    </Link>
            </form>
        </div>
    );
};

export default Home;
