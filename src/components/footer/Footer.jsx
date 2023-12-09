import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
       <footer className=' flex flex-col space-y-10 justify-center m-10'>
            <div className=' flex justify-center space-x-5'>
                <Link to='https://github.com/Jrpatra706'>
                    <p className=' text-center text-white font-medium '>Github</p>
                </Link>
                <Link to='https://twitter.com/jrpatra915'>
                <p className=' text-center text-white font-medium '>Twitter</p>
                </Link>
                <Link to='https://www.linkedin.com/in/jyotiranjan-gangadhar-patra-03995423a/'>
                <p className=' text-center text-white font-medium '>Linkedin</p>
                </Link>
                <Link to='https://www.facebook.com/jyotiranjan.patra.5477'>
                <p className=' text-center text-white font-medium '>Facebook</p>
                </Link>
                <Link to='https://leetcode.com/Jyotiranjan706/'>
                <p className=' text-center text-white font-medium '>Leetcode</p>
                </Link>
            </div>
            <p className=' text-center text-gray-700 font-medium '> 2023 Company Ltd. All rights reservered.</p>
       </footer>
  )
}

export default Footer
