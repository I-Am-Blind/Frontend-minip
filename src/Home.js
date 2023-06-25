import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

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

    const captions = [
        "Plan Your Perfect Getaway with AI Assistance",
        "Effortless Trip Planning with Intelligent AI Tech",
        "Unleash Your Wanderlust with AI-Powered Trip Planning",
        "Your Personalized Travel Guide: Powered by AI",
        "Unlock Your Dream Vacation: AI-Powered Trip Planning",
      ];


    return (
        <div className="flex flex-col  items-center justify-center h-screen bg-mountain bg-cover font-main">
            <div className="text-5xl font-bold text-white font-main h-64  w-full px-8 mb-16">
            <Typewriter words={captions} loop={true} deleteSpeed={25} typeSpeed={50} delaySpeed={5000} />
            </div>
            <form className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="startDestination"
                    placeholder="Start Destination"
                    value={startDestination}
                    onChange={(event) => setStartDestination(event.target.value)}
                    className="px-4 py-2  rounded-2xl focus:outline-none inputs"
                />
                <input
                    type="text"
                    name="endDestination"
                    placeholder="End Destination"
                    value={endDestination}
                    onChange={(event) => setEndDestination(event.target.value)}
                    className="px-4 py-2  text-white rounded-2xl focus:outline-none inputs"
                />
                <input
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    className="px-4 py-2  text-white rounded-2xl focus:outline-none inputs"
                />
                <input
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    className="px-4 py-2  text-white rounded-2xl focus:outline-none inputs"
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
