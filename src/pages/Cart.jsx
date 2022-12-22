import React from 'react'
import { useSelector } from 'react-redux'   
import CartItem from '../components/CartItem'
import { Total } from '../components/Total'
const Cart = () => {
  const cart = useSelector((state) => state.cart)
    return (
    <div className="container mx-auto sm:px-4">
    <div className='m-10'>
    <h3 className='font-extrabold text-4xl my-10 text-center'>Shopping Cart</h3>
    <div className='mb-20 text-center'>
    <Total/>
    </div>
    <div className='grid grid-cols-4 gap-4'>
    {cart.map((item) => (
    <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
    </div>
  </div>
</div>
  )
}

export default Cart