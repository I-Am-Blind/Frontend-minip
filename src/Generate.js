import React,{useState,useEffect} from 'react'
import Card from "./Card";
import axios from "axios";


const Generate = ({ text, setText, startDestination, endDestination, startDate, endDate }) => {


    const [img, setimg] = useState("")
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = {
                    from_des: startDestination,
                    to_des: endDestination,
                    start_date: formatDate(startDate),
                    end_date: formatDate(endDate)
                };

                const response = await axios.post("http://127.0.0.1:5000/chat", details, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "/",
                    },
                });

                const data = response.data.itinerary;
                setText(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData()
        
    }, []);


    function getImg(location){
        const fetchImg = async () => {
            try {
                const params = {
                  location : location
                };

                const response = await axios.post("http://127.0.0.1:5000/getimg", params, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "/",
                    },
                });

                 const data = response.data;
                 setimg(data.original);
            } catch (error) {
                console.error("Error:", error);
            }
        };

       fetchImg();
        
    }

    getImg(endDestination);


    return (<div className='bg-[#F3F4F6] '>
                <div className='h-max w-full flex flex-col justify-center items-center '><img src={img} className='h-64 w-max ' alt={endDestination}/>
        <div className='font-bold text-5xl capitalize w-full text-white  rounded-2xl px-4 py-2 -mt-32'>
        {startDestination} To {endDestination}
        </div>
        </div>
        <div className=' cardscontainer  h-full flex flex-col mx-4 '>
        {text.map((day, index) => {
            return (<Card key={index} day={day} getImg={getImg}  />)
        })}
    </div>
    </div>)
}

export default Generate