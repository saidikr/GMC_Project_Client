import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../components/laoding';
import { ErrorFetch } from '../../../components/error-fetch';
import { formatDate } from '../../../helper/formatDate';
import { deleteProduct } from '../../../service/product.service';

const AdminProductsPage = () => {
  const { data, loading, error } = useFetch("/products");
  const navigate=useNavigate();
  return (
    <div className="my-5">
      <h2 className='font-semibold'>Products Management</h2>
      <div className="mt-5">
        <div>
          <button
            className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-btn-color  hover:cursor-pointer pr-4 "
            onClick={() => navigate("/admin/product/create")}
          >
            New Product
            <i className="pl-2 fa fa-plus fa-xs" aria-hidden="true"></i> 
          </button>
        </div>
      </div>
      <div className="mt-5">
        {loading && <Loading />}
        {error && <ErrorFetch message="Error while fetchin contacts " /> }
        {!error && !loading && data && (
          <table className="border rounded border-spacing-1  bg-btn-color">
            <thead>
              <tr>
                <th className='border-2'>Title</th>
                <th className='border-2'>Price</th>
                <th className='border-2'>Description</th>
                <th className='border-2'>Category</th>
                <th className='border-2'>Rating</th>
                <th className='border-2'>Quantity</th>
                <th className='border-2'>CreatedAt</th>
                <th className='border-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className='text-center border-r-2 border-b-2'>{item.title}</td>
                      <td className='text-center border-r-2 border-b-2'>{`${item.price} Da`}</td>
                      <td className='border-r-2 py-5 border-b-2'>{item.description}</td>
                      <td className='text-center border-r-2 border-b-2'>{item.category}</td>
                      <td className='text-center border-r-2 border-b-2'>{item.rating}</td>
                      <td className='text-center border-r-2 border-b-2'>{item.quantity}</td>
                      <td className='text-center border-r-2 border-b-2'>{formatDate(item.createAt)}</td>
                      <td className='flex justify-center align-middle '>
                        <a className=" my-20 py-5 px-2" onClick={()=>deleteProduct(item._id)}><i  className="h-9 w-9 cursor-pointer text-center text-white bg-red-600 py-2 rounded-xl fa fa-trash fa-2xl" aria-hidden="true"></i></a>                        
                        <a className=" my-20 py-5 px-2" onClick={()=>navigate(`/admin/product/edit/${item._id}`)}><i className="h-9 w-9 cursor-pointer text-center text-white bg-nav-top py-2 rounded-xl fa fa-edit fa-2xl"></i></a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
          <a href="#" className=" fixed bottom-3 right-3 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-4 leading-normal no-underline bg-site-color text-white "><i className="fa fa-angle-double-up"></i></a>
    </div>
  );
}

export default AdminProductsPage
