import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import movieList from "./local-json/sample.json"
import moviePoster from "./assets/movie.jpg"
import seriesPoster from "./assets/series.jpg"
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
    
    { console.log(data.entries)}
    {
     
     data.entries && data.entries.length > 0 && 
      data.entries.map(({title,description}) => (
        <div key={title} className='row'>
          
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))
    }
    </div>
  );
}

