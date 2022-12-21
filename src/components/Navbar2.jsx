import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Compare } from '../helper/compreUrlPath'
import { Compare2 } from '../helper/compare2'

export const Navbar2 = () => {
    const path = useLocation();
  return (
    <>
    <div>
    <nav className="relative flex flex-wrap items-center content-between py-3 px-4  text-black ">
    <div className="flex container align-center  max-w-full mx-auto sm:px-4">
      <button className="hidden py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="px-5 py-1 border border-gray-600 rounded" />
      </button>
      <div className="flex-grow items-center" id="navbarNavDropdown">
        <ul className="flex flex-wrap list-reset pl-0 mb-0">
          <li className>
                {/* {
                  Compare("/admin", path.pathname)
                    ? "mb-0 p-3 bg-nav-top"
                    : "mb-0 p-3 hover:text-nav-top"
                } */}
            <Link className={Compare("/", path.pathname)?"inline-block py-2 px-4 no-underline bg-white rounded-3xl":"inline-block py-2 px-4 no-underline hover:text-white"} aria-current="page" to="/">Home</Link>
          </li>
          <li className>
            <Link className={Compare2("/shop", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl bg-white":"inline-block py-2 px-4 no-underline hover:text-white"} to="shop">Shop</Link>
          </li>
          <li className>
            <Link className={Compare("/shopDetail", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl bg-white":"inline-block py-2 px-4 no-underline hover:text-white"} >Shop Details</Link>
          </li>
          <li className>
            <Link className={Compare("/contact", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl bg-white":"inline-block py-2 px-4 no-underline hover:text-white"} to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  </>
  )
}
