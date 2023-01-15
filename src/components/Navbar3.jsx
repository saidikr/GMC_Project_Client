import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

export const Navbar3 = () => {
    const [nav, setNav] = useState(false);
    const links=[
        {id:1, link:"home"},
        {id:2, link:"about"},
        {id:3, link:"portfolio"},
        {id:4, link:"experience"},
        {id:5, link:"contact"},
        
    ]
  return (
    <div className='bg-black px-4 flex justify-between items-center w-full h-20 text-white sticky top-0 z-50'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Said</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id,link})=>(
                            <li key={id} className='cursor-pointer px-4 cap font-medium capitalize text-gray-500 hover:scale-105 hover:text-white duration-200'><Link to={link} smooth duration={500} >{link}</Link></li>
            ))}
        </ul>
        <div onClick={()=>setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 hover:text-white text-gray-500'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && 
                (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                {
                links.map(({id,link})=>(
                            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} >{link}</Link></li>
                ))
                }
                </ul>
                )
        }

    </div>
  )
}
