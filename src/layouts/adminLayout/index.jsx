import React from 'react'
import { Outlet,Link } from "react-router-dom"
import { logout } from "../../service/auth.service";
import { useLocation } from 'react-router-dom';
import { Compare } from '../../helper/compreUrlPath';
import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'


export const AdminLayout = () => {
  const handleLogout = () => {
    logout();
  };
  const path = useLocation();
    const [nav3, setNav3] = useState(false);
  return (
      <div className="grid grid-cols-5 h-screen">
        <div className='bg-site-color w-14  md:w-52 h-full'>
          <div className='hidden md:flex md:flex-col'>
            <h5 className="text-black mt-10 p-3 font-semibold">Admin Dashboard</h5>
            <div className="h-full mt-1">
              <p
                className={
                  Compare("/admin", path.pathname)
                    ? "mb-0 p-3 bg-btn-color"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/admin" className="block">
                  Dashboard
                </Link>
              </p>

              <p
                className={
                  Compare("/admin/products", path.pathname)
                    ? "mb-0 p-3 bg-btn-color"
                    : "mb-0 p-3 hover:text-white"
                }
              >
                <Link to="/admin/products" className="block">
                  Products
                </Link>
              </p>
              <p className="mt-10 mb-0 p-3">
                <button onClick={handleLogout} className="block hover:text-white" >Logout</button>
              </p>
            </div>
          </div>
          <div onClick={()=>setNav3(!nav3)} className='md:hidden m-3 cursor-pointer hover:text-white '>
            {nav3 ? <FaTimes size={30} className='text-black hover:text-white absolute top-0 left-3' /> : <FaBars size={30} className='text-white hover:text-black' />}
            {nav3 && 
                (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-site-color text-black z-50'>
                <li className="mb-0 p-3 font-semibold text-4xl hover:text-white">
                <Link to="/admin" className="block">
                  Dashboard
                </Link>
              </li>
              <li className="mb-0 p-3 font-semibold text-4xl hover:text-white" >
                <Link to="/admin/products" className="block">
                  Products
                </Link>
              </li>
              <li className="rounded-3xl bg-btn-color mt-10 mb-0 p-3 font-semibold text-4xl">
                <button onClick={handleLogout} className="block hover:text-white" >Logout</button>
              </li>
                </ul>
                )
        }    
        </div>
        </div>
        <div className="col-span-4"><Outlet/></div>
      </div>
      )
}
