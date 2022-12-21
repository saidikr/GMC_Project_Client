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
    
      <div className="grid grid-cols-4 gap-1 h-screen">
        <div className='bg-site-color w-52 side-Bar h-full sticky top-0 pb-10'>
          <div className='p-1'>
            <h5 className="text-black p-3 font-semibold">Admin Dashboard</h5>
            
            <div className="h-full mt-20 sidebar-links">
              <p
                className={
                  Compare("/admin", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                }
              >
                <Link to="/admin" className="block">
                  Dashboard
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
                  Posts
                </Link>
              </p>
              <p className="mt-10 mb-0 p-3">
                <button onClick={handleLogout} className="block hover:text-white" >Logout</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 mr-10"><Outlet/></div>
      </div>
      )
}
