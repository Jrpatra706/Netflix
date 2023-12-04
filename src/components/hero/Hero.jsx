import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from '../../services/movieService';

const Hero = () => {
  const [movie,setMovie]= useState({});

  useEffect(()=>{
    axios.get(endpoints.popular).then((response)=>{
      const movies = response.data.results;
      setMovie(movies[Math.floor(Math.random()*movies.length)]);
    });
  },[]);

  const {backdrop_path,title,overview,release_date  } = movie;
  
  return (
    <div>
      <h1>{movie.title}</h1>
      
    </div>
  )
}

export default Hero
