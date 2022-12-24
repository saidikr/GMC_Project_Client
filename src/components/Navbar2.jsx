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
    <nav className="py-3 px-4 text-black ">
    <div className="container flex justify-between">
      <div className='flex ml-8' >
        <a href=""><button className='py-2 px-4 text-4xl border font-bold text-site-color border-solid' >E</button></a>
        <h1 className='p-2 font-bold text-4xl'>Shopper</h1>
      </div>
      <div className="flex items-center mt-3" id="navbarNavDropdown">
        <button className="hidden py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="px-5 py-1 border border-gray-600 rounded" />
      </button>
        <ul className="flex flex-wrap list-reset pl-0 mb-0">
          <li>
            <Link className={Compare("/", path.pathname)?"inline-block py-2 px-4 no-underline bg-nav-top text-white rounded-3xl":"inline-block py-2 px-4  no-underline hover:text-white"} aria-current="page" to="/">Home</Link>
          </li>
          <li >
            <Link className={Compare2("/shop", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl text-white bg-nav-top":"inline-block py-2 px-4 no-underline  hover:text-white"} to="shop">Shop</Link>
          </li>
          <li >
            <Link className={Compare("/Cart", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl text-white bg-nav-top":"inline-block py-2 px-4 no-underline hover:text-white"} to="Cart">Shpping Cart</Link>
          </li>
          <li >
            <Link className={Compare("/contact", path.pathname)?"inline-block py-2 px-4 no-underline rounded-3xl text-white bg-nav-top":"inline-block py-2 px-4 no-underline  hover:text-white"} to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  </>
  )
}
