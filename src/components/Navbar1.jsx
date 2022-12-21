import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    <nav className=' pt-2 bg-nav-top h-[40px] px-7 grid grid-cols-2 gap-1'>
        <div>
        <Link className='ml-8' to='/'>FAQs</Link>
        <span className='mx-1'>|</span>
        <Link className='mx-1' to='/'>Help</Link>
        <span className='mx-1'>|</span>
        <Link to='/'>Support</Link>
        </div>
        <div >
          <div className="d-inline-flex justify-end text-right">
          <a className="text-dark px-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2">
            <i className="fab fa-youtube" />
          </a>
        </div>
        </div>
    </nav>
    <nav className=' pt-2 px-5 h-[80px] grid grid-cols-3'>
      <div className='flex ml-8' >
        <a href=""><button className='py-2 px-4 text-4xl border font-bold text-site-color border-solid' >E</button></a>
        <h1 className='p-2 font-bold text-4xl'>Shopper</h1>
      </div>
      <div className='flex justify-center m-2 border border-site-color rounded h-11'>
        <input type="search" id="default-search" className="w-full h-10 text-sm " placeholder="Search for products" required />
        <span className='flex flex-col justify-center h-10 text-center rounded px-2 '><i class="text-site-color hover:text-black fa fa-search"></i></span>
      </div>
      <div className='flex justify-end m-2 text-right' >
        <span className='flex justify-center h-10 text-center rounded-xl border border-site-color p-2 mx-1'>
              <div>
                <i className="text-site-color fas fa-heart text-primary mx-1"></i>
                <span className="badge text-site-color">0</span>
              </div>
        </span>
        <span className='flex justify-center h-10 text-center rounded-xl border  border-site-color p-2 mx-1'>
          <div>
          <i className="text-site-color fas fa-shopping-cart text-primary mx-1" />
          <span className="badge text-site-color">0</span>
        </div>
        </span>
      </div>
    </nav>
    </>
  )
}
