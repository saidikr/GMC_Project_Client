import React from 'react'
import useFetch from '../../hooks/useFetch';
import { Loading } from '../laoding';
import { ErrorFetch } from '../error-fetch';
import { useNavigate } from 'react-router-dom';
import { Item } from '../Item';


export const MensProductsCardsShop = () => {

  var { data, error, loading } = useFetch(
    "/mensproduct"
  );
  
  const navig=useNavigate()
  return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center p-5">
              <h2 className="section-title px-5"><span class="text-2xl px-2 mt-10">Stay Updated</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto p-5">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            
            <div class="grid grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
                
            <div  className="max-w-sm rounded overflow-hidden shadow-lg" key={el._id} >
            <div onClick={()=>navig(`/shopDetail/${el._id}`)}>
            <img className="w-full" src={el.image} style={{height:"290px",width:"290px"}} alt="Sunset in the mountains"/>
            <div className="flex-auto p-6 border-l border-r text-center pt-4 pb-3">
            <h6 className="truncate mb-3">{el.title}</h6>
            <div className="flex justify-center">
            <h6>{el.price}</h6><h6 className="text-gray-700 ml-2"><del>{el.price}</del></h6>
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
            ))}
            </div>
          )}
        </div>
    </div>
  )
}