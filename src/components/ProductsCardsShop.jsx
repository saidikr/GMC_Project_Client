import React from 'react'
import useFetch from '../hooks/useFetch';
import { Loading } from './laoding';
import { ErrorFetch } from './error-fetch';
import { Shopcart } from './Shopcart';
import { Scrollbars } from 'react-custom-scrollbars-2';



export const ProductsCardsShop = () => {
  const { data, error, loading } = useFetch(
    "/products"
  );
  return (
    <div className="container mx-auto sm:px-4 ">
            
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto p-5">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className='h-[80vh] md:h-[150vh] w-full text-center'>
            <Scrollbars>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
            <Shopcart key={el._id} el={el}/>
            ))}
            </div>
            </Scrollbars>
            </div>
          )}
        </div>
    </div>
  )
}

export const MensProductsCardsShop = () => {

  const { data, error, loading } = useFetch(
    "/mensproduct"
  );
  
  return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center pt-2">
              <h2 className="section-title px-5"><span className="font-semibold text-3xl px-2">Mens Products</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className='h-[80vh] md:h-[150vh] w-full text-center'>
            <Scrollbars>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
            <Shopcart key={el._id} el={el}/>
            ))}
            </div>
            </Scrollbars>
            </div>
          )}
        </div>
    </div>
  )
}


export const WomensProductsCardsShop = () => {

    const { data, error, loading } = useFetch(
    "/womensproduct"
  );
  
    return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center pt-2">
              <h2 className="section-title px-5 mb"><span className="font-semibold text-3xl px-2">Womens Products</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className='h-[80vh] md:h-[150vh] w-full text-center'>
            <Scrollbars>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
            <Shopcart key={el._id} el={el}/>
            ))}
            </div>
            </Scrollbars>
            </div>
          )}
        </div>
    </div>
  )
}



export const JeweleryProductsCardsShop = () => {
   
  const { data, error, loading } = useFetch(
    "/jeweleryproduct"
  );
  return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center pt-2">
              <h2 className="section-title px-5"><span className="font-semibold text-3xl px-2">Jewerly</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className='h-[80vh] md:h-[150vh] w-full text-center'>
            <Scrollbars>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
                <Shopcart key={el._id} el={el}/>
            ))}
            </div>
          </Scrollbars>
          </div>
          )}
        </div>
    </div>
  )
}





export const ElectronicsProductsCardsShop = () => {
  
  const { data, error, loading } = useFetch(
    "/electronicsproduct"
  ); 
    return (
    <div className="container mx-auto sm:px-4 ">
            <div className="text-center pt-2">
              <h2 className="section-title px-5"><span className="font-semibold text-3xl px-2">Electronics</span></h2>
            </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="error while fetching " />}
        <div className="container max-w-full mx-auto">
        {data && data.length === 0 && <h1>Not data to show</h1>}
          {!error && data && (
            <div className='h-[80vh] md:h-[150vh] w-full text-center'>
            <Scrollbars>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-20">
              {data.map((el) => (
              <Shopcart key={el._id} el={el}/>
            ))}
            </div>
            </Scrollbars>
            </div>
          )}
        </div>
    </div>
  )
}