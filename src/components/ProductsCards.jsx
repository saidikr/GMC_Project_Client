import React from 'react'
import img from '../assets/cat-6.jpg'
import useFetch from '../hooks/useFetch';
import { Loading } from './laoding';
import { ErrorFetch } from './error-fetch';
import { useNavigate } from 'react-router-dom';
import { height, width } from '@mui/system';
import { Item } from './Item';
import { Shopcart } from './Shopcart';



export const ProductsCards = () => {
  const { data, error, loading } = useFetch(
    "/products"
  );
  const navig=useNavigate()
  return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center mb-4 p-5">
              <h2 className="section-title px-5 mb-3"><span className="text-2xl px-2 mt-10">Stay Updated</span></h2>
            <h2 className="section-title px-5"><span className="px-2 font-extrabold text-4xl mt-20">----Trandy Products----</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto p-5">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            
            <div className="grid grid-cols-4 gap-4 text-center mt-20">
            {data.map((el) => (
              <Shopcart key={el._id} el={el}/>
            ))}
            </div>
          )}
        </div>
    </div>
  )
}
