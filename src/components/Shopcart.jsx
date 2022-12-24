import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Item } from './Item';


export const Shopcart = ({el}) => {
    const priceoff=el.price+el.price*25/100
      const navig=useNavigate()
  return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" >
            <div onClick={()=>navig(`/shopDetail/${el._id}`)}>
            <img className="w-full" src={el.image} style={{height:"290px",width:"290px"}} alt="Sunset in the mountains"/>
            <div className="flex-auto p-6 border-l border-r text-center pt-4 pb-3">
            <h6 className="truncate mb-3">{el.title}</h6>
            <div className="flex justify-center">
                
            <h6>{el.price.toFixed(0)} Da</h6><h6 className="text-gray-700 ml-2"><del>{priceoff.toFixed(0)} Da</del></h6>
            </div>
            </div>
            </div>
            <div className="py-3 px-6 border-t-1 flex justify-between bg-gray-100 ">
                          <button 
                              className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-900 p-0"
                              onClick={()=>navig(`/shopDetail/${el._id}`)}><i className="fas fa-eye text-site-color mr-1"></i>View Detail
                          </button>
                        <Item
                        id={el._id}
                        image={el.image}
                        title={el.title}
                        price={el.price} 
                        />
            </div>
            </div>
  )
}
