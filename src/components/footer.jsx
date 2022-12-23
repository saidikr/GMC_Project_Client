import React from 'react'
import img from '../assets/payments.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './header.css'

export const Footer = () => {
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
    <div className="flex flex-wrap headercolor xl:px-12 pt-16 ">
        <div className="lg:w-1/3 md:w-full pr-4 pl-4 mb-5 xl:pr-12">
            <div className='flex pb-5' >
            <a href=""><button className='py-2 px-4 text-4xl border font-bold text-site-color border-solid' >E</button></a>
            <h1 className='p-2 font-bold text-4xl'>Shopper</h1>
            </div>
            <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-site-color mr-3" />123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-envelope text-site-color mr-3" />info@example.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-site-color mr-3" />+012 345 67890</p>
        </div>
        <div className="lg:w-2/3 pr-4 pl-4 md:w-full ">
            <div className="flex flex-wrap ">
            <div className="md:w-1/3 pr-4 pl-4 mb-5">
                <h5 className="font-bold text-gray-900 mb-4">Quick Links</h5>
                <div className="flex flex-col justify-start">
                <a className="text-gray-900 mb-2" href="/"><i className="fa fa-angle-right mr-2" />Home</a>
                <a className="text-gray-900 mb-2" href="/shop"><i className="fa fa-angle-right mr-2" />Our Shop</a>
                <a className="text-gray-900 mb-2" href="/shop"><i className="fa fa-angle-right mr-2" />Shop Detail</a>
                <a className="text-gray-900 mb-2" href="/Cart"><i className="fa fa-angle-right mr-2" />Shopping Cart</a>
                <a className="text-gray-900 mb-2" href="/Cart"><i className="fa fa-angle-right mr-2" />Checkout</a>
                <a className="text-gray-900" href="/contact"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                </div>
            </div>
            <div className="md:w-1/3 pr-4 pl-4 mb-5">
                <h5 className="font-bold text-gray-900 mb-4">Quick Links</h5>
                <div className="flex flex-col justify-start">
                <a className="text-gray-900 mb-2" href="/"><i className="fa fa-angle-right mr-2" />Home</a>
                <a className="text-gray-900 mb-2" href="/shop"><i className="fa fa-angle-right mr-2" />Our Shop</a>
                <a className="text-gray-900 mb-2" href="/shop"><i className="fa fa-angle-right mr-2" />Shop Detail</a>
                <a className="text-gray-900 mb-2" href="/Cart"><i className="fa fa-angle-right mr-2" />Shopping Cart</a>
                <a className="text-gray-900 mb-2" href="/Cart"><i className="fa fa-angle-right mr-2" />Checkout</a>
                <a className="text-gray-900" href="/contact"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                </div>
            </div>
            <div className="md:w-1/3 pr-4 pl-4 mb-5">
                <h5 className="font-bold text-gray-900 mb-4">Newsletter</h5>
                <form>
                <div className="mb-4">
                    <input type="text" className="block appearance-none w-full px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-4" placeholder="Your Name" required="required" />
                </div>
                <div className="mb-4">
                    <input type="email" className="block appearance-none w-full px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-4" placeholder="Your Email" required="required" />
                </div>
                <div>
                    <button className=" align-middle text-center select-none  font-normal whitespace-no-wrap rounded  px-3 leading-normal no-underline bg  bg-site-color text-black hover:text-white block w-full border-0 py-3" type="submit">Subscribe Now</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 '>
        <div className="flex  xl:px-0 md:text-left sm:text-left text-left">
            <p className="md:mb-0  md:text-left text-gray-900">
            © <a className="text-gray-900 font-bold inline-block" href="#">Your Site Name</a>. All Rights Reserved. Designed by 
            <a className="text-gray-900 font-bold inline-block" href="https://htmlcodex.com"> HTML Codex</a>
            </p>
        </div>
        <div className="flex justify-end pr-4 xl:px-0 text-end md:text-right ">
            <img className="h-5" src={img} alt="no image" />
        </div>
        </div>

        <div className="flex flex-wrap  border-t border-gray-100 xl:mx-12 py-4">
        
        </div>


    </div>
    <a href="#" className=" fixed bottom-3 right-3 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-4 leading-normal no-underline bg-site-color text-white"><i className="fa fa-angle-double-up"></i></a>
    <div className='flex justify-end m-2 text-right' >
        <div className='fixed bottom-2 left-3 shopping-cart flex justify-center h-12 w-15 bg-site-color text-center rounded border px-2 py-3 mx-1 text-white hover:cursor-pointer' onClick={() => navigate('/Cart')}>
        <i className="fas fa-shopping-cart text-primary m-1" />  
        <p className="badge">{getTotalQuantity() || 0}</p>
        </div>
      </div>        
    </>
  )
}
