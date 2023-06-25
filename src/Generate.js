import React from 'react'
import Card from "./Card";

const Generate = ({text,setText}) => {

      
  return (<div className=' cardscontainer bg-white h-[] w-64'>
    {text.map((day,index) => {
    return(<div>
        <Card key={index} day={day}/>
    </div>)
   })}
  </div>)
}

export default Generate