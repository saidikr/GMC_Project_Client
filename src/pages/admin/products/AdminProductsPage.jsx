import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../components/laoding';
import { ErrorFetch } from '../../../components/error-fetch';
import { formatDate } from '../../../helper/formatDate';
import { deleteProduct } from '../../../service/product.service';
import { ToastContainer } from 'react-toastify';

const AdminProductsPage = () => {
  const { data, loading, error } = useFetch("/products");
  const navigate=useNavigate();
  return (
    <div className="container my-5">
      <h2 className='font-semibold'>Products Management</h2>
      <div className="mt-5">
        <div className="">
          <button
            className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-slate-400  hover:bg-slate-500 pr-4 "
            onClick={() => navigate("/admin/product/create")}
          >
            AddOne
          </button>
        </div>
      </div>
      <div className="container mt-5">
        {loading && <Loading />}
        {error && <ErrorFetch message="Error while fetchin contacts " /> }
        {!error && !loading && data && (
          <table className="table-auto border rounded border-spacing-1  bg-nav-top">
            <thead>
              <tr>
                <th className='border-2'>title</th>
                <th className='border-2'>price</th>
                <th className='border-2'>description</th>
                <th className='border-2'>category</th>
                <th className='border-2'>rating</th>
                <th className='border-2'>quantity</th>
                <th className='border-2'>CreatedAt</th>
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
                      <td className='text-center border-r-2 border-b-2'>{item.quantity}</td>
                      <td className='text-center border-r-2 border-b-2'>{formatDate(item.createAt)}</td>
                      <td>
                        <button className="inline-block align-middle text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-800 md:w-full pr-4" onClick={()=>deleteProduct(item._id)}>del</button>
                        <a
                          className="inline-block align-middle font normal text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-600 text-white hover:bg-green-800 md:w-full pr-4"
                          href={`/admin/product/edit/${item._id}`}
                        >
                        edit
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default AdminProductsPage
