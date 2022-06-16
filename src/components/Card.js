import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
export default function card({imageUrl,title}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt=''/>
        </div>
        <div className='card-title'>
          <button>
              <Link to={title} className="btn btn-primary">{title}</Link>
          </button>  
        </div>
    </div>

  )
}
