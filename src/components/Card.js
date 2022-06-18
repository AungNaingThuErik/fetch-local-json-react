import React from 'react'
import { useNavigate } from "react-router-dom";
import './Card.css'

export default function Card({imageUrl,title,redirect}) {

  let navigate = useNavigate();

  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt=''/>
        </div>
        {
          console.log(redirect)
        }
        <div className='card-title'>
            <button onClick={() => {navigate(`${redirect}`)}}>{title}</button>

        </div>
    </div>

  )
}
