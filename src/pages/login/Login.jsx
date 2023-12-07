import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Login = () => {
   
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const loginHandler=()=>{
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    emailRef.current.value='';
    passRef.current.value='';
  }

  return (
    <>
    <div className=' w-full h-screen'>
      <img  className='  sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt="///"
      />
      <div className=' bg-black/70 fixed top-0 left-0 w-full h-screen'/>

      <div className=' fixed w-full px-4 py-24 z-20' > 
        <div className=' max-w-[320px] h-[400px] mx-auto flex flex-col bg-black/70 p-10 pb-20 rounded-lg'>
          <h1 className=' font-nsans-bold text-2xl mb-4'>Login</h1>

          <input ref={emailRef} className=' mb-3 rounded-sm p-[6px] pl-[10px] bg-gray-600'
            placeholder='email' autoComplete='email'
            type='email' 
          />
          <input ref={passRef} className=' p-[6px] pl-[10px]  mb-5 rounded-sm  bg-gray-600' 
            placeholder='password' autoComplete='current-password'
            type='password'
          />

          <button onClick={loginHandler}
            className=' font-nsans-bold w-full bg-red-600 text-sm py-2 rounded '
          >
            Login
          </button>
          <div className=' flex justify-between mt-4 mb-3 text-xs text-gray-500 items-center'>
            <div>
              <input type='checkbox'  className=' mr-1'/>
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <p  className=' text-xs text-gray-500'>New to Netflix?
            <Link to='/signup'  className=' ml-2 text-sm text-white'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
