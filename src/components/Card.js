import React from 'react'
import './Card.css'
export default function card({imageUrl,title}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt=''/>
        </div>
        <div className='card-title'>
          <button>
            <a>{title}</a>
          </button>  
        </div>
    </div>

  )
}
