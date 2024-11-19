import React, { Fragment, useContext } from 'react'
import { ShoppingCartContext } from '../context'

const CartItle = ({singleCartItem}) => {
    const {handleRemoveFromCart,handleAddToCart} = useContext(ShoppingCartContext)
  return (
    <Fragment>
    <div className=' grid grid-cols-3 items-start gap-5'>
        <div className=' col-span-2 flex items-start gap-4'>
            <div className=' w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
              <img src={singleCartItem?.thumbnail}
              className=' w-full h-full object-contain' alt="" />
            </div>
            <div>
                <h3 className=' text-base font-bold text-gray-900'>{singleCartItem.title}</h3>
              <button
              onClick={()=> handleRemoveFromCart(singleCartItem, true)}
               className=" mt-4 text-sm px-4 rounded-md py-3 bg-black text-white
              font-bold">REMOVE</button>
            </div>

        </div>
        <div className=' ml-auto'>
            <h3 className=' text-lg font-bold text-gray-900'>${singleCartItem?.totalPrice.toFixed(2)}</h3>
         <p className=' mt-2 mb-3 font-bold text-[16px]'>quantity: {singleCartItem?.quantity}</p>
         <div className=' space-x-4 mt-4'>
            <button
            onClick={()=> handleRemoveFromCart(singleCartItem, false)}
            disabled={singleCartItem?.quantity === 1}
             className=' disabled:opacity-65 font-extrabold px-3 py-1 border border-[#000]'>-</button>
            
            <button onClick={()=> handleAddToCart(singleCartItem)} className=' font-extrabold px-2 py-1 border border-[#000]'>+</button>
         </div>
        </div>
      
    </div>
    <hr  className=' bg-gray-900'/>
    </Fragment>
  )
}

export default CartItle
