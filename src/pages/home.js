import React from "react";
import Card from '../components/Card';
import moviePoster from "../assets/movie.jpg"
import seriesPoster from "../assets/series.jpg"

const Home = (props) => {

  return (
    <>
     <h1>Popular Titles</h1>
      <div className='popular-title'>
          <Card 
            title='Popular Movies'
            imageUrl ={moviePoster}
            redirect= "/movies"
          />
          <Card 
            title='Popular Series'
            imageUrl ={seriesPoster}
            redirect= "/series"
          />
      </div>
    </>
  );
};

export default Home;