import React from 'react'
import { useLocation } from 'react-router-dom';

import { Compare } from '../helper/compreUrlPath';
import { Outlet,Link } from "react-router-dom"

export const SideBar = () => {
  const path = useLocation();
   return (
         
        <div className='bg-site-color w-52 side-Bar h-full sticky top-0 pb-10'>
          <div className='p-1'>
            <h5 className="text-black p-3 font-semibold">Category</h5>
            
            <div className="h-full mt-20 sidebar-links">
              <p
                className={
                  Compare("/admin", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                }
              >
                <Link to="/admin" className="block">
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
                <Link to="/admin/products" className="block">
                  Women's Clothes
                </Link>
              </p>
            </div>
          </div>
        </div>
  )
}
