import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ErrorFetch } from './error-fetch'
import { Loading } from './laoding'



export const CardDetails = () => {
    const params=useParams()
    const {data,loading,error}=useFetch(`/product/${params.id}`)
  return (
<div className="m-5 container mx-auto sm:px-4 ">
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container flex justify-center max-w-full mx-auto p-5">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div class="max-w-xl rounded overflow-hidden shadow-lg" key={data._id} >
            <img class="w-full" src={data.image} alt="Sunset in the mountains"/>
            <div className="flex-auto p-6 border-l border-r pt-4 pb-3">
            <h6 className="truncate ml-5 mb-3">{`Name : ${data.title}`}</h6>
            <h6 className="ml-5 mb-3">{`Description : ${data.description}`}</h6>
            <h6 className="ml-5 mb-3">{`Category : ${data.category}`}</h6>
            <h6 className="ml-5 mb-3">{`Rating : ${data.rating}`}</h6>
            <h6 className="ml-5 mb-3">{`Quantity : ${data.quantity}`}</h6>
            <div className="flex ml-5">
            <h6>{`Price : ${data.price}`}</h6><h6 className="text-gray-700 ml-2"><del>{data.price}</del></h6>
            </div>
            </div>
            <div className="py-3 px-6 border-t-1 flex justify-center bg-gray-100 ">
                        <a href="" className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  text-gray-900 p-0"><i class="fas fa-shopping-cart text-site-color mr-1"></i>Add To Cart</a>
            </div>
            </div>

          )}
        </div>
    </div>
  )
}
