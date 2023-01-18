import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import "../../components/header.css"
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Compare } from "../../helper/compreUrlPath"
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from "react";



export const Shoplayout = () => {
  const [nav2, setNav2] = useState(false);
  const path = useLocation();
    return (
        <div className="relative">
        <div className='grid grid-cols-4'>
            <div>
            <div className='w-16 bg-site-color md:w-52 side-Bar h-full pb-10'>
            <div className='p-1'>
            
            <h5 className="hidden md:inline-block text-black mt-5 p-3 font-semibold">Category</h5>
            
            <div className="h-full hidden md:block sidebar-links">
              <p
                className={
                  Compare("/shop", path.pathname)
                    ? "mb-0 p-3 headercolor"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/shop" className="block">
                  all
                </Link>
              </p>
              <p
                className={
                  Compare("/shop/mens", path.pathname)
                    ? "mb-0 p-3 headercolor"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/shop/mens" className="block">
                  Mens's Clothes
                </Link>
              </p>
                
              <p
                className={
                  Compare("/shop/womens", path.pathname)
                    ? "mb-0 p-3 headercolor"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/shop/womens" className="block">
                  Women's Clothes
                </Link>
              </p>
                            <p
                className={
                  Compare("/shop/electronics", path.pathname)
                    ? "mb-0 p-3 headercolor"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/shop/electronics" className="block">
                  Electronics
                </Link>
              </p>
                            <p
                className={
                  Compare("/shop/jewelery", path.pathname)
                    ? "mb-0 p-3 headercolor"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/shop/jewelery" className="block">
                  Jewelery
                </Link>
              </p>
            </div>
            <div onClick={()=>setNav2(!nav2)} className='md:hidden m-3 cursor-pointer hover:text-white '>
            {nav2 ? <FaTimes size={30} className='text-black hover:text-white absolute top-0 left-3' /> : <FaBars size={30} className='text-white hover:text-black' />}
            {nav2 && 
                (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-site-color text-black z-50'>
                <li
                className="mb-0 p-3 font-semibold text-4xl hover:text-white"
              >
                <Link to="/shop" className="block">
                  all
                </Link>
              </li>
              <li
                className="mb-0 p-3 font-semibold text-4xl hover:text-white"
              >
                <Link to="/shop/mens" className="block">
                  Mens's Clothes
                </Link>
              </li>
              <li
                className="mb-0 p-3 font-semibold text-4xl hover:text-white"
              >
                <Link to="/shop/womens" className="block">
                  Women's Clothes
                </Link>
              </li>
              <li
                className="mb-0 p-3 font-semibold text-4xl hover:text-white"
              >
                <Link to="/shop/electronics" className="block">
                  Electronics
                </Link>
              </li>
              <li
                className="mb-0 p-3 font-semibold text-4xl hover:text-white"
              >
                <Link to="/shop/jewelery" className="block">
                  Jewelery
                </Link>
              </li>
                </ul>
                )
        }    
        </div>
          </div>
        </div>
            </div>
            <div className='col-span-3'><Outlet/></div>
        </div>
        </div>
  )
}
