import React from 'react'
import './sidebar.css'
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineDashboard,MdOutlineSettingsSuggest} from 'react-icons/md'
import {BsListCheck} from 'react-icons/bs'
import user from './images.png';

function sidebar() {
  return (
    <>
    <div className='main'>
    <div>
    {/* <FiUserCheck size={100} className='User-circle'/> */}
    <img 
    className='User-circle'
    alt='user'
    src={user}/>
    <h2 className='name1'>M.D. Erick</h2>
    </div>
    <div className='parent'>
    <BiUserCircle size={50} className='User-circle1'/>
    <h3 className='name2'>Fiona Gallagher</h3>
    </div>
    <div className='child'>
    <BiUserCircle size={50} className='User-circle2'/>
    <h3 className='name3'>Frank Gallagher</h3>
    </div>
    <hr />
    <div className = 'down-sidebar'>
    <div className='down-sidebar-1'>
    <h2><span className='down-logo'><MdOutlineDashboard size={30}/></span><span className='dash'>Dashboard</span></h2>
    </div>
    <div className='down-sidebar-1'>
    <h2><span className='down-logo'><BsListCheck/></span><span className='dash1'>Results</span> </h2>
    </div>
    <div className='down-sidebar-1'>
    <h2><span className='down-logo'><MdOutlineSettingsSuggest/></span><span className='dash2'>Settings</span> </h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default sidebar