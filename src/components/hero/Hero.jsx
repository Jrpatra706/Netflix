import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../../services/movieService';

const Hero = () => {
  const [movie,setMovie]= useState({});

  useEffect(()=>{
    axios.get(endpoints.popular).then((response)=>{
      const movies = response.data.results;
      setMovie(movies[Math.floor(Math.random()*movies.length)]);
    });
  },[]);

  if(!movie){
    return(<>
      <p>fetching movie...</p>
    </>);
  }
  
  const truncate = (str,len)=>{
    if(!str) return "";
    return str.length>len?str.slice(0,len)+"...":str;
  }
  const {backdrop_path,title,overview,release_date  } = movie;
  
  return (
    <div className=' w-full h-[310px] md:h-[430px]'>
      <div className=' w-full h-full'>
        {/* backdrop */}
        <div className=' absolute w-full h-[310px] md:h-[430px] bg-gradient-to-r from-black '/>
        <img className=' w-full h-full object-cover object-top'
          src={createImageUrl(backdrop_path,'original')} alt={title} />
        <div className=' absolute w-full top-[18%] lg:top-[30%] p-3 md:p-6'>
          <h1 className=' font-nsans-bold text-3xl md:text-5xl'>{title}</h1>
          <div className=' mt-4'>
            <button className='md:text-base  text-sm bg-gray-300 text-black px-5 py-2'>
              Play
            </button>
            <button className='md:text-base text-sm border ml-2 px-4 py-2 border-gray-300'>
              Watch Later
            </button>
          </div>
          <p className=' text-sm text-gray-500 mt-2'>{release_date}</p>
          <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] text-sm text-ellipsis whitespace-nowrap  block overflow-hidden'>{truncate(overview,165)}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
