import React from 'react'

export const Features = () => {
  return (
    <div className="container mx-auto pt-5 sm:px-4">
                <div className="flex justify-center flex-wrap pb-3">
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 sm:w-1/6 pl-42 pb-1">
                    <div className="flex flex-col md:flex-row items-center border mb-4 text-center" style={{padding: 30}}>
                        <h1 className="fa fa-check text-site-color m-0 mr-3" />
                        <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                    </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 sm:w-1/6 pl-42 pb-1">
                    <div className="flex flex-col md:flex-row items-center border mb-4 text-center" style={{padding: 30}}>
                        <h1 className="fa fa-shipping-fast text-site-color m-0 mr-3" />
                        <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                    </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 sm:w-1/6 pl-42 pb-1">
                    <div className="flex flex-col md:flex-row items-center border mb-4 text-center" style={{padding: 30}}>
                        <h1 className="fas fa-exchange-alt text-site-color m-0 mr-3" />
                        <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                    </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 pr-4 pl-4 sm:w-1/6 pl-42 pb-1">
                    <div className="flex flex-col md:flex-row items-center border mb-4 text-center" style={{padding: 30}}>
                        <h1 className="fa fa-phone-volume text-site-color m-0 mr-3" />
                        <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                    </div>
                    </div>
                </div>
            </div>
  )
}
