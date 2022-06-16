import React,{useState,useEffect} from 'react';
import movieList from "../local-json/sample.json"
import Card from '../components/Card';
 
const Movies = () => {
  const [data, setData]= useState(movieList);

  return (
    <>
      { 
      data.entries && data.entries.length > 0 && 
        data.entries.map(({title,description,programType,images}) => (
          <div key={title} className='row'>
            { programType === 'movie' ?  
              [
                <h1>{title}</h1>,
                <p>{description}</p>,
                <img src={images['Poster Art'].url}/> 
              ]
              :
              '' }

          </div>
        ))
      }
    </>
  );
};
  
export default Movies;