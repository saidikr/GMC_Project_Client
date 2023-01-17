import React from 'react'
import img1 from '../assets/offer-1.png'
import img2 from '../assets/offer-2.png'
import { Link } from 'react-router-dom'

export const Offers = () => {
  return (
    <div className="sm:px-4 max-w-full offer mx-7 pt-5">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center xl:px-12">
            <div className="md:w-1/3 lg:w-1/2 pb-4 px-1">
                <div className="flex flex-col justify-center items-center lg:flex-row bg-gray-200 text-center md:text-right text-white mb-2 py-5 px-5">
                    <img src={img1} className='h-[215px]' alt="image"/>
                    <div className="mt-5" >
                    <h5 className="uppercase text-site-color mb-3">35% off the all order</h5>
                    <h1 className="mb-4 text-4xl font-weight-semi-bold text-black">Spring Collection</h1>
                    <Link to="/shop" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-site-color border-site-color hover:bg-site-color hover:text-white bg-gray-200 md:py-2 md:px-4">Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 lg:w-1/2 pb-4 px-1">
                <div className=" flex flex-col justify-center items-center lg:flex-row bg-gray-200 text-center md:text-right text-white mb-2 py-5 px-5">
                    <img src={img2} className='h-[215px]' alt="image"/>
                    <div className="mt-5" >
                    <h5 className="uppercase text-site-color mb-3">20% off the all order</h5>
                    <h1 className="mb-4 text-4xl font-weight-semi-bold text-black">Winter Collection</h1>
                    <Link to="/shop" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-site-color border-site-color hover:bg-site-color hover:text-white bg-gray-200 md:py-2 md:px-4">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
