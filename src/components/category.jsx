import React from 'react'
import cat1 from '../assets/cat-1.jpg'
import cat2 from '../assets/cat-2.jpg'
import cat4 from '../assets/cat-4.jpg'
import { useNavigate } from 'react-router-dom'

export const Category = () => {
  const navigate=useNavigate();
const Categorytab=[
    {id:1,name:"men's clothing",quantity:15,img:cat1,path:'mens'},
    {id:2,name:"women's clothing",quantity:15,img:cat2,path:'womens'},
    {id:4,name:"electronics",quantity:15,img:cat4,path:'electronics'},
    {id:5,name:"jewelery",quantity:15,img:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",path:'jewelery'},
    ]

  return (
    <>
    <div className="container max-w-full mx-auto sm:px-4 pt-5">
    <div className="flex flex-wrap  xl:px-12 pb-3">
    <div className='grid grid-cols-4'>
    {Categorytab.map((element)=>(
    <div key={element.id} className=" pr-4 pl-4 pb-1" onClick={() => navigate(`/shop/${element.path}`)}>
      <div className="cat-item flex flex-col border mb-4" style={{padding: 30}}>
        <p className="text-right">{`${element.quantity} Products`}</p>
        <a href='' className="cat-img relative overflow-hidden mb-3">
          <img className="max-w-full h-auto" style={{height:"250px",width:"313px"}}src={element.img} alt={`${element.name} image`} />
        </a>
        <h5 className="font-weight-semi-bold m-0">{element.name}</h5>
      </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    </>
  )
}
