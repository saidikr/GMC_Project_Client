import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"
import { SideBar } from "../../components/SideBar"
import React from 'react'
import { useLocation } from 'react-router-dom';

import { Compare } from '../helper/compreUrlPath';
import { Outlet,Link } from "react-router-dom"



export const Shoplayout = () => {
  const path = useLocation();
    return (
        <div>
        <Header/>
        <div className='grid grid-cols-4'>
            <div>
                <div className='bg-site-color w-52 side-Bar h-full sticky top-0 pb-10'>
          <div className='p-1'>
            <h5 className="text-black p-3 font-semibold">Category</h5>
            
            <div className="h-full mt-20 sidebar-links">
              <p
                className={
                  Compare("/admin/products", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                }
              >
                <Link to="/" className="block">
                  all
                </Link>
              </p>
              <p
                className={
                  Compare("/", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                }
              >
                <Link to="/mens" className="block">
                  Mens's Clothes
                </Link>
              </p>

              <p
                className={
                  Compare("/admin/products", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                }
              >
                <Link to="/womens" className="block">
                  Women's Clothes
                </Link>
              </p>
            </div>
          </div>
        </div>
            </div>
            <div className='col-span-3'>    <Outlet/></div>
        </div>
        <Footer/>
        </div>
  )
}
