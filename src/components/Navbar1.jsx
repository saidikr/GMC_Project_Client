import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


export const Navbar = () => {
  const navigate=useNavigate();
  const cart = useSelector((state) => state.cart)
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <>
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
    <nav className=' pt-2 px-5 h-[80px] grid grid-cols-3'>
      <div className='flex ml-8' >
        <a href=""><button className='py-2 px-4 text-4xl border font-bold text-site-color border-solid' >E</button></a>
        <h1 className='p-2 font-bold text-4xl'>Shopper</h1>
      </div>
    </nav>
    </>
  )
}
