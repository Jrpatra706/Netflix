import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { arrayUnion , doc, updateDoc} from 'firebase/firestore';
import { db} from '../services/firebse';
import { UserAuth } from '../context/AuthContext'; 

const Showfav = ({movie}) => {
    const [heart,setHeart]= useState(false);
    const { user }  = UserAuth();

    const addToFavs=async ()=>{
        const userEmail = user?.email;
        if(userEmail){
            const userDoc = doc(db,'users',userEmail);
            setHeart(!heart);
            await updateDoc(userDoc,{
                favShows: arrayUnion({...movie}),
            });
        }else{
            alert('login first');
        }
    };
  return (
    <>
        <p onClick={addToFavs}>
            {heart? <FaHeart className='absolute top-2 left-2 text-gray-300' />:
                <FaRegHeart className=' absolute top-2 left-2 text-gray-300'/>}
        </p>
    </>
  )
}

export default Showfav
