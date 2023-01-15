import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Compare } from '../helper/compreUrlPath'
import { Compare2 } from '../helper/compare2'
import { useState } from 'react'

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const path = useLocation();
  return (

    <div>
    <nav className=' pt-2 bg-nav-top h-[40px] px-7 grid grid-cols-2 gap-1'>
        <div>
        <Link className='ml-8 text-white' to='/'>FAQs</Link>
        <span className='mx-1 text-white' >|</span>
        <Link className='mx-1 text-white' to='/'>Help</Link>
        <span className='mx-1 text-white'>|</span>
        <Link className='text-white' to='/'>Support</Link>
        </div>
        <div >
          <div className="d-inline-flex justify-end text-right">
          <a href='https://www.facebook.com' className="text-dark px-2">
            <i className="text-white fab fa-facebook-f" />
          </a>
          <a href='https://www.twitter.com' className="text-dark px-2">
            <i className="text-white fab fa-twitter" />
          </a>
          <a href='https://www.linkedin.com'  className="text-dark px-2">
            <i className="text-white fab fa-linkedin-in" />
          </a>
          <a href='https://www.instagram.com'  className="text-dark px-2">
            <i className="text-white fab fa-instagram" />
          </a>
          <a href='https://www.youtube.com'  className="text-dark pl-2">
            <i className="text-white fab fa-youtube" />
          </a>
        </div>
        </div>
    </nav>
    <div className='headercolor py-3 px-4 flex justify-between items-center w-full h-20 text-white sticky top-0 z-50'>
      <div className='flex ml-8' >
        <a href=""><button className='py-2 px-4 text-4xl border font-bold text-site-color border-solid' >E</button></a>
        <h1 className='p-2 font-bold text-4xl'>Shopper</h1>
      </div>
        <ul className="hidden md:flex text-black text-xl">
          <li>
            <Link className={Compare("/", path.pathname)?"cursor-pointer py-2 px-4 cap font-medium capitalize bg-nav-top text-white rounded-3xl":"cursor-pointer py-2 px-4 cap font-medium capitalize hover:scale-105 duration-200 hover:text-white"} aria-current="page" to="/">Home</Link>
          </li>
          <li >
            <Link className={Compare2("/shop", path.pathname)?"cursor-pointer py-2 px-4 cap font-medium capitalize bg-nav-top text-white rounded-3xl":"cursor-pointer py-2 px-4 cap font-medium capitalize hover:scale-105 duration-200 hover:text-white"} to="shop">Shop</Link>
          </li>
          <li >
            <Link className={Compare("/Cart", path.pathname)?"cursor-pointer py-2 px-4 cap font-medium capitalize bg-nav-top text-white rounded-3xl":"cursor-pointer py-2 px-4 cap font-medium capitalize hover:scale-105 duration-200 hover:text-white"} to="Cart">Shpping Cart</Link>
          </li>
          <li >
            <Link className={Compare("/contact", path.pathname)?"cursor-pointer py-2 px-4 cap font-medium capitalize bg-nav-top text-white rounded-3xl":"cursor-pointer py-2 px-4 cap font-medium capitalize hover:scale-105 duration-200 hover:text-white"} to="contact">Contact</Link>
          </li>
        </ul>
        <div onClick={()=>setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 hover:text-white '>
            {nav ? <FaTimes size={30} className='text-black hover:text-white' /> : <FaBars size={30} className='text-site-color' />}
        </div>
        {nav && 
                (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-site-color text-black'>
                <li>
                    <Link onClick={()=>setNav(!nav)}  className={Compare("/", path.pathname)?" text-4xl font-medium capitalize  text-white rounded-3xl":" text-4xl  font-medium capitalize hover:text-white"} aria-current="page" to="/">Home</Link>
                </li>
                <li >
                    <Link onClick={()=>setNav(!nav)}  className={Compare2("/shop", path.pathname)?"cursor-pointer text-4xl font-medium capitalize text-white rounded-3xl":"cursor-pointer text-4xl font-medium capitalize hover:text-white"} to="shop">Shop</Link>
                </li>
                <li >
                    <Link onClick={()=>setNav(!nav)}  className={Compare("/Cart", path.pathname)?"cursor-pointer text-4xl font-medium capitalize text-white rounded-3xl":" text-4xl font-medium capitalize hover:text-white"} to="Cart">Shpping Cart</Link>
                </li>
                <li >
                    <Link onClick={()=>setNav(!nav)}  className={Compare("/contact", path.pathname)?"cursor-pointer text-4xl font-medium capitalize text-white rounded-3xl":" text-4xl font-medium capitalize hover:text-white"} to="contact">Contact</Link>
                </li>
                </ul>
                )
        }
    </div>
</div>
  )
}
