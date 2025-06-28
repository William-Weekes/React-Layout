import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const handleSignUpClick = () => {
  console.log('Sign Up link clicked');
};
const handleLoginClick = () => {
  console.log('Login link clicked');
};
const Nav = () => {
  return (
    <div className="mt-5 mb-30">
      <nav className='flex container mx-auto items-center justify-between'>
          <img src='../public/inboxd-logo.png' alt='Get Inboxd Logo'/>
          <ul className='flex space-x-4' >
              <NavLink to="/"> Home</NavLink>
              <NavLink to="/services"> Services</NavLink>
              <NavLink to="/about"> About</NavLink>
              <NavLink to="/pricing"> Pricing</NavLink>
              <NavLink to="/blog"> Blog</NavLink>  
        </ul>
        
        <div>
          <Link to="/signup" onClick={handleSignUpClick} className="bg-green-700 text-white py-3 px-5 rounded-lg mr-2"> Sign-Up</Link>
          <Link to="/login" onClick={handleLoginClick} className="text-green py-3 px-5 border-2 border-gray-200 border-solid rounded-lg">Login</Link> 
        </div>

      </nav>
    </div>
  )
}

export default Nav