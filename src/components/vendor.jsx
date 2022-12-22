import React from 'react'
import {vendors} from '../data/index'

export const Vendor = () => {
  return (
    <div className="container max-w-full mx-auto sm:px-4 py-5">
  <div className="flex flex-wrap  xl:px-12">
    <div className="relative flex-grow max-w-full flex-1 px-4">
      <div className="grid grid-cols-6 gap-4">
        {vendors && vendors.map((el)=>(
          <div key={el.id} className=" border p-6">
          <img src={el.img} alt='vedor image' />
        </div>            
        ))}
      </div>
    </div>
  </div>
</div>

  )
}
