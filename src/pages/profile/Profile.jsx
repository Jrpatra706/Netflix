import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../../context/AuthContext'  
import { db } from '../../services/firebse'
import {createImageUrl} from '../../services/movieService'
import { arrayRemove, doc, onSnapshot , updateDoc} from 'firebase/firestore'

const Profile = () => {

  const [movies,setMovies] = useState([]);
  const {user} = UserAuth();

  useEffect(()=> {
    if(user){
      onSnapshot(doc(db,'users',`${user.email}`),(doc)=>{
        if(doc.data()) setMovies(doc.data().favShows);
      })
    }
  },[user?.email])

  const slide = (offset)=>{
    const slider = document.getElementById('slider');
    slider.scrollLeft= slider.scrollLeft+offset;
  }

  const handleUnlikeShow= async (movie)=>{
    const userDoc = doc(db,'users',user.email)

    await updateDoc(userDoc,{
      favShows:arrayRemove(movie),
    });
  };
 

  return (
    <>
      <div className=''>
        <div>
          <img  className=' bloc  w-full h-[320px] object-cover'
            src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt="///"
          />

          <div className=' bg-black/70 fixed top-0 left-0 w-full h-screen'/>
          <div  className=' absolute top-[20%] p-4 md:p-8'>
            <h1 className=' text-2xl md:text-4xl font-nsans-bold my-2'>My Shows</h1>
            <p className=' font-nsans-light text-gray-400 text-sm md:text-base'>{user.email}</p>
          </div>
        </div>

        {/* movie row */}

        <h2 className=' font-nsans-bold md:text-xl p-3'>Fav Shows</h2>

        <div className=' relative flex items-center group'>

          <MdChevronLeft onClick={()=>slide(-500)}
          className=' bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={30}/>

          <div id={`slider`} className=' w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

            {movies.map((movie)=>{
                return(<div key={movie.id} className=' relative w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                    <img className=' w-full h-32 block object-cover object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path,'w500')} alt={movie.title} />

                    <div className=' absolute top-0 left-0 w-full h-32 bg-black/80 opacity-0 hover:opacity-100'>
                      <p className=' whitespace-normal text-xs md:text-sm w-full h-full flex justify-center items-center font-nsans-bold'>{movie.title}</p>

                      {/* cross button to remove from fav shows */}
                      <p>
                        <AiOutlineClose onClick={()=>handleUnlikeShow(movie)}
                         size={20} className=' absolute top-2 right-2'/>
                      </p>

                    </div>
                </div>);
            })}

          </div>

          <MdChevronRight onClick={()=>slide(500)}
         className=' bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={30}/>

        </div>

      </div>
    </>
  )
}

export default Profile
