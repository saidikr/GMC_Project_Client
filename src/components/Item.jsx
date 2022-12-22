import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import React from 'react'


export const Item = ({id, title, image, price}) => {
  const dispatch = useDispatch()
    return (
    <button 
        className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-900 p-0"
        onClick={() => 
            dispatch(addToCart({
            id, title, image, price
            }))
        }><i className="fas fa-shopping-cart text-site-color mr-1"></i>Add To Cart
    </button>
  )
}
