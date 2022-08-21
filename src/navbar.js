import React from 'react'
import {AiFillLock} from 'react-icons/ai'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import './navbar.css'
import logo from './logo.jpeg';
import flag from './ukFlag.jpeg'

const navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div>
        <img 
        className='img'
        alt='logo'
        src={logo}/>
        </div>
        <div className='social-media'>
        <ul className="social-media-desktop">
            <li>
            <img 
            className='img1'
            alt='flag'
            src={flag}/>
            </li>
            <li>
              <AiFillLock size={25} className='lock'/>
            </li>
            <li>
              <BsFillArrowRightSquareFill className='lock1'/>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar