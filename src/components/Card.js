import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
export default function card({imageUrl,title,redirect}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt=''/>
        </div>
        <div className='card-title'>
        <Link to={redirect}>
          <button>
             {title}
          </button> 
        </Link> 
        </div>
    </div>

  )
}
