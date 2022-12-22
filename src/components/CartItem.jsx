import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()
  return (
    <div className="">
      <img className=" mb-4" style={{height:"290px",width:"290px"}} src={image} alt='item'/>
      <div className="">
        <p className="font-semibold mb-5 truncate">{title}</p>
        <div className='text-center'>
        <p>
          <strong>{price}</strong>
          <small> Da</small>
        </p>
        <div className='flex justify-center space-x-5 mt-5'>
          <button className='rounded-full bg-site-color w-6' onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button className='rounded-full bg-site-color w-6' onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className="mt-5 rounded px-3 bg-site-color text-black hover:text-white border-0 py-3" 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
        </div>
      </div>
    </div>
  )
}
export default CartItem