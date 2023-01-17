import React from 'react'
import cat1 from '../assets/lala1.jpg'
import cat2 from '../assets/lala2.jpg'
import cat4 from '../assets/electro.jpg'
import cat3 from '../assets/bij.jpg'

import { useNavigate } from 'react-router-dom'
const Categorytab=[
    {id:1,name:"Men's clothing",img:cat1,path:'mens'},
    {id:2,name:"Women's clothing",img:cat2,path:'womens'},
    {id:4,name:"Electronics",img:cat4,path:'electronics'},
    {id:5,name:"Jewelery",img:cat3,path:'jewelery'},
    ]
export const Category = () => {
  const navigate=useNavigate();


  return (
    <>
    <div className="container max-w-full mx-auto sm:px-4 pt-5">
    <div className="justify-center flex flex-wrap  xl:px-12 pb-3">
    <div className='flex justify-center flex-wrap lg:flex-nowrap'>
    {Categorytab.map((element)=>(
    <div key={element.id} className="hover:scale-105 transition ease-out text-center p-4 border rounded-xl shadow-xl" onClick={() => navigate(`/shop/${element.path}`)}>
      <div className="flex flex-col relative">
        <div className="cat-img relative overflow-hidden">
          <img className="w-full h-auto" style={{height:"350px",width:"250px"}}src={element.img} alt={`${element.name} image`} />
        </div>
        <span className='absolute bottom-0 h-10 py-2 font-weight-bold m-0 w-full opacity-80 bg-slate-200'>
        <h5 >{element.name}</h5>
        </span>
      </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    </>
  )
}
