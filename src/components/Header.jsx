import React from 'react'
import { Navbar } from './Navbar1'
import { Navbar2 } from './Navbar2'
import { SideBar } from './sideBar'
import './header.css'

export const Header = () => {
  return (
    <div className='headercolor'>
        <Navbar/>
        <Navbar2/>
    </div>
  )
}
