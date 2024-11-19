import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';

const ProductDetails = () => {

  const {productDetails,loading,setProductDetails,cartItems,setLoading,handleAddToCart} = useContext(ShoppingCartContext)
  const {id}= useParams();



  async function fetchProductDetails(){
    setLoading(true)
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    

    if(result){
      setProductDetails(result)
      setLoading(false)
    }
  }



  useEffect(()=>{
   fetchProductDetails()
  },[id])

 

  if(loading) return <h1 className=' text-4xl text-black font-bold'>Data Loading... </h1>

  return (
    <div>
      <div className=' p-6 lg:max-w-7xl max-w-4xl mx-auto'>
       <div className=' grid items-center grid-cols- lg:grid-cols-5 gap-12 p-6 shadow-sm'>
         <div className=' lg:col-span-3 w-full lg:sticky top-0 text-center'>
           <div className=' px-4 py-10 rounded-xl shadow-lg relative'>
            <img src={productDetails?.thumbnail} alt={productDetails?.title} 
            className=' w-4/5 rounded object-cover'/>
           </div>
           <div className=' space-x-6 mt-6 flex flex-wrap justify-center mx-auto'>
            {
              productDetails?.images?.length > 0 ?
              productDetails?.images.map((imageItem)=>(
                <div className=' rounded p-4 shadow-md ' key={imageItem}>
                <img src={imageItem} alt="" 
                className=' w-24 cursor-pointer gap-4 hover:scale-105'/>
                </div>
              ))
              :null
            }

           </div>
         </div>
         <div className='lg:col-span-2'>
          <h2 className=' text-2xl font-extrabold text-black'>{productDetails?.title}</h2>
           <div className=' flex flex-wrap gap-4 mt-4'>
             <p className=' text-xl font-bold'>${productDetails?.price}</p>
           </div>
           <div>
            <button
            
            disabled={ productDetails? cartItems.findIndex(item=>item.id === productDetails.id) > -1  :false}
             onClick={() => handleAddToCart(productDetails)} className=' disabled:opacity-65 mt-8 min-w-[200px] px-4 py-3 border
             border-[#333] bg-transparent text-sm font-semibold
               rounded'>Add to Cart</button>
           </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default ProductDetails
