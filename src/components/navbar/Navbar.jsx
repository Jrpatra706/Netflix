import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between m-2'>
      <Link to='/'>
        <h1 className=' text-red-600  font-nsans-bold  cursor-pointer text-4xl'>NETFLIX</h1>
      </Link>
      <div>
        <Link to='/login'>
          <button className=' border-none'>Login</button>
        </Link>
        <Link to='/signup'>
          <button className=' bg-red-600 px-5 py-2 rounded text-sm  ml-4 cursor-pointer'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
