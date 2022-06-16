import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import movieList from "./local-json/sample.json"
import moviePoster from "./assets/movie.jpg"
import seriesPoster from "./assets/series.jpg"

import {Router, Routes, Route, useNavigate} from 'react-router-dom';
import Movies from './pages/movies';
import Series from './pages/series';


export default function App() {
  const [data, setData]= useState(movieList);
  return (
    <div className="App">
      <h1>Popular Titles</h1>
      <div className='popularTitle'>
          <Card 
            title='Popular Movies'
            imageUrl ={moviePoster}
          />
          <Card 
            title='Popular Series'
            imageUrl ={seriesPoster}
          />
      </div>
    
    {/* { console.log(data.entries)} */}
    {
     
     data.entries && data.entries.length > 0 && 
      data.entries.map(({title,description,programType,images}) => (
        <div key={title} className='row'>
          
          <h1>{title}</h1>
          <p>{description}</p>
          <>
          { programType == 'series' ? <img src={images['Poster Art'].url}/>
            
          :'' }
          { console.log(images['Poster Art'].url)}
          </>
          {/* {(programType === 'series')
            
          } */}
            {/* <img src={images.Poster Art.url} alt='images'/> */}
          </div>
      ))
    }
    </div>
  );
}

