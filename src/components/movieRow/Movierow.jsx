import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createImageUrl } from '../../services/movieService';
import { FaHeart,FaRegHeart } from "react-icons/fa";

const Movierow = ({title,url}) => {

    const [heart,setHeart]= useState(false);
    const [movies,setMovies]= useState([]);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setMovies(response.data.results);
            console.log(response.data);
        })
    },[url]);
    
  return (
    <>
      <h2 className=' font-nsans-bold md:text-xl p-3'>{title}</h2>
      <div className=' relative flex items-center'>

        <div id={`slider`} className=' w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movies.map((movie)=>{
            return(<div key={movie.id} className=' relative w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                <img className=' w-full h-32 block object-cover object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path,'w500')} alt={title} />

                <div className=' absolute top-0 left-0 w-full h-32 bg-black/80 opacity-0 hover:opacity-100'>
                  <p className=' whitespace-normal text-xs md:text-sm w-full h-full flex justify-center items-center font-nsans-bold'>{movie.title}</p>

                  <p onClick={()=>{
                    setHeart(!heart);
                  }}>
                    {heart? <FaHeart className='absolute top-2 left-2 text-gray-300' />:
                      <FaRegHeart className=' absolute top-2 left-2 text-gray-300'/>}
                  </p>
                </div>
            </div>);
        })}
        </div>
      </div>
    </>
  )
}

export default Movierow
