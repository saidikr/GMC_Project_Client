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
        <Link className='ml-8' to='/'>FAQs</Link>
        <span className='mx-1'>|</span>
        <Link className='mx-1' to='/'>Help</Link>
        <span className='mx-1'>|</span>
        <Link to='/'>Support</Link>
        </div>
        <div >
          <div className="d-inline-flex justify-end text-right">
          <a href='https://www.facebook.com' className="text-dark px-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a href='https://www.twitter.com' className="text-dark px-2">
            <i className="fab fa-twitter" />
          </a>
          <a href='https://www.linkedin.com'  className="text-dark px-2">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href='https://www.instagram.com'  className="text-dark px-2">
            <i className="fab fa-instagram" />
          </a>
          <a href='https://www.youtube.com'  className="text-dark pl-2">
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
      <div className='flex justify-center text-center m-2 h-11'>
        <h1 className='w-full' style={{fontFamily: 'Rancho',fontSize: '48px',  textShadow: '4px 4px 2px #aaa'}} >Welcome to Our Site</h1>
      </div>
      <div className='flex justify-end m-2 text-right' >
        <div className='shopping-cart flex justify-center h-10 text-center rounded-xl border bg-site-color  p-2 mx-1 text-white hover:text-black' onClick={() => navigate('/Cart')}>
        <i className="fas fa-shopping-cart text-primary mx-1" />  
        <p className="badge">{getTotalQuantity() || 0}</p>
        </div>
      </div>
    </nav>
    </>
  )
}
