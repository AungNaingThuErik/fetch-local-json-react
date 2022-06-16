import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import movieList from "./local-json/sample.json"
import moviePoster from "./assets/movie.jpg"
import seriesPoster from "./assets/series.jpg"

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
            redirect= {<Movies />}
          />
          <Card 
            title='Popular Series'
            imageUrl ={seriesPoster}
            redirect= {<Series />}
          />
      </div>
    
    
    </div>
  );
}

