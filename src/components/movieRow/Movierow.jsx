import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createImageUrl } from '../../services/movieService';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Showfav from '../showfav';

const Movierow = ({title,url}) => {
    const rowId = Math.floor(Math.random()*1000)

    const [movies,setMovies]= useState([]);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setMovies(response.data.results);
        })
    },[url]);

   const slide = (offset)=>{
    const slider = document.getElementById('slider'+rowId);
    slider.scrollLeft= slider.scrollLeft+offset;
   }
    
  return (
    <>
      <h2 className=' font-nsans-bold md:text-xl p-3'>{title}</h2>
      <div className=' relative flex items-center group'>
        <MdChevronLeft onClick={()=>slide(-500)}
        className=' bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={30}/> 
        <div id={`slider`+rowId} className=' w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movies.map((movie)=>{
            return(<div key={movie.id} className=' relative w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                <img className=' w-full h-32 block object-cover object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path,'w500')} alt={title} />

                <div className=' absolute top-0 left-0 w-full h-32 bg-black/80 opacity-0 hover:opacity-100'>
                  <p className=' whitespace-normal text-xs md:text-sm w-full h-full flex justify-center items-center font-nsans-bold'>{movie.title}</p>

                  <Showfav movie={movie}/>
                </div>
            </div>);
        })}
        </div>
        <MdChevronRight onClick={()=>slide(500)}
         className=' bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={30}/>
      </div>
    </>
  )
}

export default Movierow
