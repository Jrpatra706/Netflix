import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h1 className=' text-red-600  font-nsans-bold  cursor-pointer text-4xl'>NETFLIX</h1>
      </Link>
    </div>
  )
}

export default Navbar
