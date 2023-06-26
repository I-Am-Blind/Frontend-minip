import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Loader = () => {

    const captions = [
        ".",
        ".",
        "."
      ];

  return (
    <div className=" flex justify-center items-center h-screen w-screen  sm:text-3xl  text-2xl capitalize  text-black font-semibold mx-4">
           <div className='animate-bounce'>
           Your Awesome trip plan is being generated <br/><span className='sm:text-5xl sm:w-[32rem] text-3xl bg-purple-700 rounded-full h-16 w-52 text-white mt-2  sm:text-3 flex  items-center justify-center sm:justify-start sm:px-8 sm:py-10'>Please Wait ...</span>
           </div>                    
            </div>
  )
}

export default Loader