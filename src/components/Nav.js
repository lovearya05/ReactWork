import React from 'react'
import {Link, Outlet } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
    <span><Link to={'/Home'}> Home </Link> </span>
    <span><Link to={'/About'}> About </Link> </span>
    <span><Link to={'/Contact'}> Contact </Link> </span>      
    <Outlet/>
    </div>
  )
}

export default Nav
