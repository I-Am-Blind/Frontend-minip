import React from 'react';
import { useMediaQuery } from "react-responsive";

const Card = ({ day }) => {

  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div className='flex  flex-col sm:flex-row rounded-xl p-4 my-4  w-full h-max px-8  font-main  cards text-black bg-white sm:py-4 sm:mt-4'>
      <div className="flex sm:flex-col items-center justify-between sm:justify-normal mb-4">
        <div className="flex items-center sm:w-32 sm:flex-col sm:gap-4 ">
          <div className="bg-purple-700 rounded-full h-8 w-8 sm:h-16 sm:w-16 sm:text-3  sm:text-3xl flex  items-center justify-center">
            <span className="text-white font-bold">{day?.day}</span>
          </div>
          <h1 className="text-xl font-bold ml-2 sm:text-4xl">Day {day?.day}</h1>
        </div>
        <h3 className="text-sm opacity-60 font-bold">{day?.date}</h3>
      </div>
      <div className=' h-max w-full sm:flex'>
        {day['events'].map((eve, index) => {
          return (<div key={index} className='sm:mx-8'>
            <img className='h-max max-h-96 w-max rounded-xl mb-4 sm:h-48' src={eve.link} alt={eve.link} />
            <div className='text-md font-bold bg-purple-700 px-4 py-2 rounded-xl text-white time w-max sm:h-12 sm:flex sm:items-center'>{eve.time}</div>
            <div className='flex flex-col sm:flex-row sm:justify-start sm:items-center my-4 gap-2'>
              <div className="bg-blue-500  text-sm rounded-full h-8 w-8 sm:h-12 sm:w-12  sm:text-2xl flex  items-center justify-center">
                <span className="text-white font-bold ">{index+1}</span>
              </div>
              <div className=' text-3xl font-bold sm:text-4xl flex '>{eve.location}</div>
            </div>
            <p className=' text-md  sm:w-96 sm:text-md  sm:mt-4 sm:mb-6'>{eve.description}</p>
            {isMobile ? <hr className="my-8 border-gray-200" /> : <></>}
          </div>)

        })}
      </div>
      <div className="text-md font-bold bg-purple-700 px-4 py-8 rounded-xl text-white sm:justify-between sm:flex sm:flex-col">
        <div className='mb-4'>
          <h3 className=" text-2xl font-bold">Accommodation</h3>
          <p className="opacity-80 text-xl ">{day?.accommodation}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Mode of Transport</h3>
          <p className="opacity-80 text-xl">{day?.transport}</p>
        </div>
      </div>

    </div>
  );
};

export default Card;
