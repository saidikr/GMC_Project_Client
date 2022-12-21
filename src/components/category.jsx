import React from 'react'
import cat1 from '../assets/cat-1.jpg'
import cat2 from '../assets/cat-2.jpg'
import cat3 from '../assets/cat-3.jpg'
import cat4 from '../assets/cat-4.jpg'
import cat5 from '../assets/cat-5.jpg'
import cat6 from '../assets/cat-6.jpg'

const Categorytab=[
    {id:1,name:"men's clothing",quantity:15,img:cat1},
    {id:2,name:"women's clothing",quantity:15,img:cat2},
    {id:3,name:"Accerssories",quantity:15,img:cat3},
    {id:4,name:"electronics",quantity:15,img:cat4},
    {id:5,name:"jewelery",quantity:15,img:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},
    {id:6,name:"Shoes",quantity:15,img:cat6},
    ]

export const Category = () => {
  return (
    <div>
    <div className="container max-w-full mx-auto sm:px-4 pt-5">
    <div className="flex flex-wrap  xl:px-12 pb-3">
    {Categorytab.map((element)=>(
    <div key={element.id} className="lg:w-1/3  md:w-1/2 pr-4 pl-4 pb-1">
      <div className="cat-item flex flex-col border mb-4" style={{padding: 30}}>
        <p className="text-right">{`${element.quantity} Products`}</p>
        <a href='' className="cat-img relative overflow-hidden mb-3">
          <img className="max-w-full h-auto" src={element.img} alt={`${element.name} image`} />
        </a>
        <h5 className="font-weight-semi-bold m-0">{element.name}</h5>
      </div>
    </div>    
    ))}
    </div>
    </div>
    </div>
  )
}
