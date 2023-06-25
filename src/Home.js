import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({
    startDestination,
    setStartDestination,
    endDestination,
    setEndDestination,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setText,
}) => {
    const handleFormSubmit = (event) => {

        event.preventDefault();
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
          };

        const details = {
            from_des: startDestination,
            to_des: endDestination,
            start_date: formatDate(startDate),
            end_date: formatDate(endDate)
        };
        axios
            .post("http://127.0.0.1:5000/chat", details, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "/",
                },
            })
            .then((response) => {
                const data = response.data.itinerary;
                setText(data);
            })
            .catch(Error);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-mountain bg-cover font-main">
            <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="startDestination"
                    placeholder="Start Destination"
                    value={startDestination}
                    onChange={(event) => setStartDestination(event.target.value)}
                    className="px-4 py-2  rounded-md focus:outline-none inputs"
                />
                <input
                    type="text"
                    name="endDestination"
                    placeholder="End Destination"
                    value={endDestination}
                    onChange={(event) => setEndDestination(event.target.value)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
                />
                <input
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
                />
                <input
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
                />               
                    <Link to='/generate'>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Generate Route
                    </button>
                    </Link>
            </form>
        </div>
    );
};

export default Home;
