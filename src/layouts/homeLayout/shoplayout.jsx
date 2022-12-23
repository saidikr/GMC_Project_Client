import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import "../../components/header.css"
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Compare } from "../../helper/compreUrlPath"
import { Link } from "react-router-dom"



export const Shoplayout = () => {
  const path = useLocation();
    return (
        <div>
        <div className='grid grid-cols-4'>
            <div>
                <div className='bg-site-color w-52 side-Bar h-full sticky top-0 pb-10'>
          <div className='p-1'>
            <h5 className="text-black mt-5 p-3 font-semibold">Category</h5>
            
            <div className="h-full  sidebar-links">
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
          </div>
        </div>
            </div>
            <div className='col-span-3'><Outlet/></div>
        </div>
        </div>
  )
}
