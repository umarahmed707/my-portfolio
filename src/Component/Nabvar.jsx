import React from 'react'
import logo from '../assets/Mynamelogo.png'

const Nabvar = () => {
  return (
    <nav className='nav-container'>
    <img src={logo} alt="" className='imagelogo'/>
        <ul>
        <li>Home</li>
        <li>Service</li>
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact me</li>
        </ul>
        <button className='btn'>Hire Me</button>
    </nav>
  )
}

export default Nabvar