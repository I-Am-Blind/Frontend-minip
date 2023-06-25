import React from 'react';

const Card = ({ day}) => {

  console.log(day['events']);
  return (
    <div className='flex  flex-col rounded-xl p-4 my-4  w-full h-max px-8  font-main  cards text-black bg-white'>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center ">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-white font-bold">{day?.day}</span>
          </div>
          <h1 className="text-xl font-bold ml-2">Day {day?.day}</h1>
        </div>
        <h3 className="text-sm opacity-60 font-bold">{day?.date}</h3>
      </div>
      <div className=' h-max w-full'>
          {day['events'].map((eve,index) => {
            return(<div key={index} className=''>
            <img className='h-max max-h-96 w-max rounded-xl mb-4' src={eve.link} alt={eve.link}/>
            <span className='text-md font-bold bg-purple-700 px-4 py-2 rounded-xl text-white time'>{eve.time}</span>
            <div className='mt-4 text-3xl font-bold'>{eve.location}</div>
            <p className=' text-md  '>{eve.description}</p>
            <hr className="my-8 border-gray-200" />
            </div>)
            
          })}
        </div>
        <div className="text-md font-bold bg-purple-700 px-4 py-8 rounded-xl text-white">
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
