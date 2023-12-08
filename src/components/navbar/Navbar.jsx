import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Navbar = () => {
  const {user , logOut} =UserAuth();
  const navigate = useNavigate();

  const logoutHandler= async ()=>{
    try{
      await logOut();
      navigate('/');
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className=' absolute w-full flex items-center justify-between  z-50 m-2'>
      <Link to='/'>
        <h1 className=' text-red-600  font-nsans-bold  cursor-pointer text-4xl'>NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to='/profile'>
            <button className=' border-none'>Profile</button>
          </Link>
          <button onClick={logoutHandler} className=' bg-red-600 px-5 py-2 rounded text-sm  ml-4 cursor-pointer'>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className=' border-none'>Login</button>
          </Link>
          <Link to='/signup'>
            <button className=' bg-red-600 px-5 py-2 rounded text-sm  ml-4 cursor-pointer'>Sign Up</button>
          </Link>
        </div>
      )}

      
    </div>
  )
}

export default Navbar
