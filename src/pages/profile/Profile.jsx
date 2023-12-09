import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../services/firebse'
import {createImageUrl} from '../../services/movieService'
import { arrayRemove, doc, onSnapshot , updateDoc} from 'firebase/firestore'

const Profile = () => {

  const [movie,setMovies] = useState([]);
  const {user} = UserAuth;

  useEffect(()=> {
    if(user){
      onSnapshot(doc(db,'users',`${user.email}`),(doc)=>{
        if(doc.data()) setMovies(doc.data().favShows);
      })
    }
  },[user?.email])
  console.log(movie);

  return (
    <div>
      profile
    </div>
  )
}

export default Profile
