
import React from 'react'
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../helper/validation';
import { createProduct } from '../../../service/product.service';

export const CreateProduct = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });
  const onSubmit=(data)=>{
    const {title,price,description,category,quantity,rating,image}=data
    createProduct({title,price,description,category,quantity,rating,image});

  }
    return (
    <div className='container'>
        <h1 className='text-xl font-semibold my-6'>Create new Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} > {//handleSubmit t3ayat l onsubmit wtmadalha data ta3 les input
        }
            <div className='mb-4'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='product name.....' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' {...register("title")} />
                <p className='text-red-400' >{errors.title?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">descreption</label>
                <textarea  className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' {...register("description")}></textarea>
                <p className='text-red-400' >{errors.description?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">price</label>
                <input  className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' {...register("price")}/>
                <p className='text-red-400' >{errors.price?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">rating</label>
                <input  className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' {...register("rating")}/>
                <p className='text-red-400' >{errors.rating?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">quantity</label>
                <input  className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' {...register("quantity")}/>
                <p className='text-red-400' >{errors.quantity?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">Category</label>
                <select className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="" {...register("category")}> 
                    <option value="">choose</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                </select>
                <p className='text-red-400' >{errors.category?.message}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor="">Product Image</label><br />
                <input type="file" placeholder='Aucun fichier choisi' {...register("image")} />
            </div>
            <div className="mb-4 mt-3">
            <button className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-site-color  hover:text-white' >Add</button>
            </div>
        </form>
    </div>
  )
}
