import React from 'react'
import img from './pic/Frame21.png'

function Navbar() {
  return (
    <div className='navbar'>
        {/* <h1 className='logo'>logo </h1> */}
        <img className="logo" src={img} alt="logo" />
        <ul>
            <li className='home'><a href='#'>Home</a></li>
            <li className='li'>Contact</li>
            <li className='li'>About</li>
        </ul>
    </div>
  )
}

export default Navbar