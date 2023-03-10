import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ErrorFetch } from './error-fetch'
import { Item } from './Item'
import { Loading } from './laoding'



export const CardDetails = () => {
    const params=useParams()
    const {data,loading,error}=useFetch(`/product/${params.id}`)
    if(data){
      var priceoff=data.price+data.price*25/100;
    }
  return (
<div className="m-5 container mx-auto sm:px-4 ">
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container flex justify-center max-w-full mx-auto p-5">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className="max-w-xl rounded overflow-hidden shadow-lg" key={data._id} >
            <div className='w-full flex justify-center'>
            <img src={data.image} alt="Sunset in the mountains" style={{height:"400px",width:"400px"}}/>
            </div>
            <div className="flex-auto p-6 border-l border-r pt-4 pb-3">
            <h6 className="truncate ml-5 mb-3"><h6 className='font-semibold inline-block'>Name : </h6>{data.title}</h6>
            <h6 className="ml-5 mb-3"><h6 className='font-semibold inline-block'>Description : </h6>{data.description}</h6>
            <h6 className="ml-5 mb-3"><h6 className='font-semibold inline-block'>Category :  </h6>{data.category}</h6>
            <h6 className="ml-5 mb-3"><h6 className='font-semibold inline-block'>Rating : </h6> {data.rating}</h6>
            <h6 className="ml-5 mb-3"><h6 className='font-semibold inline-block'>Quantity : </h6> {data.quantity}</h6>
            <div className="flex ml-5">
            <h6 className='font-semibold inline-block'>Price : </h6> {data.price} <del className="text-gray-700 ml-2">{priceoff}</del>
            </div>
            </div>
            <div className="py-3 px-6 border-t-1 flex justify-center bg-gray-100 ">
                       <Item
                        id={data._id}
                        image={data.image}
                        title={data.title}
                        price={data.price} 
                        />
            </div>
            </div>

          )}
        </div>
    </div>
  )
}
