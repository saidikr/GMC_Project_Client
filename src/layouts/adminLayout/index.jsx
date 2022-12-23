import React from 'react'
import { Outlet,Link } from "react-router-dom"
import { logout } from "../../service/auth.service";
import { useLocation } from 'react-router-dom';
import { Compare } from '../../helper/compreUrlPath';


export const AdminLayout = () => {
  const handleLogout = () => {
    logout();
  };
  const path = useLocation();
  return (
    
      <div className="grid grid-cols-5 h-screen">
        <div className='bg-site-color w-52 h-full'>
          <div className=''>
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
        </div>
        <div className="col-span-4"><Outlet/></div>
      </div>
      )
}
