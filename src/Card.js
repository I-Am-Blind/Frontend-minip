import React from 'react'

const Card = ({day}) => {
  return (
    <div >
          <h1>Day : {day?.day}</h1>
          <h3>Date : {day?.date}</h3>
          <h3>Accomodation : {day?.accommodation}</h3>
          <h3>mode of transport : {day?.mode_of_transport}</h3>
        </div>
  )
}

export default Card