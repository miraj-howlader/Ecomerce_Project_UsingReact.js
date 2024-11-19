import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../context';

const ProductTile = ({singlePtroductTitle}) => {
    const navigate = useNavigate();
    const {handleAddToCart,cartItems} = useContext(ShoppingCartContext)
    function handleNavigatetoProductDetailsPage(currentId){
      navigate(`/product-details/${currentId}`)
    }


  return (
    <div className=' relative group border border-cyan-700 p-6
     cursor-pointer'>
        <div className=' overflow-hidden aspect-w-1 aspect-h-1
        '>
        <img src={singlePtroductTitle.thumbnail}
        className=' group-hover:scale-105 object-cover w-full h-full transition-all duration-300'
        />
        </div>

        <div className=' flex items-start justify-between mt-4 space-x-4'>
          <div className=' font-bold text-gray-900 sm:text-sm text-xs md:text-balance'>
            <p className=' w-[100px] overflow-hidden text-ellipsis
             whitespace-nowrap'>{singlePtroductTitle.title}</p>
          </div>
          <div className=' text-right'>
            <p className=' text-xs font-bold text-gray-900 sm:text-sm
             lg:text-[14px]'>${singlePtroductTitle.price}</p>
          </div>
        </div>

        <button
        onClick={() => handleNavigatetoProductDetailsPage(singlePtroductTitle?.id)}
         className=' px-5 mt-5 w-full py-2 rounded-md
         bg-black text-white font-bold  text-lg'>View Details</button>
        <button
        
        disabled={cartItems.findIndex(item=> item.id === singlePtroductTitle.id) > -1}
        onClick={() => handleAddToCart(singlePtroductTitle)}
         className=' disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-md
         bg-black text-white font-bold  text-lg'>Add to Cart</button>
      
    </div>
  )
}

export default ProductTile
