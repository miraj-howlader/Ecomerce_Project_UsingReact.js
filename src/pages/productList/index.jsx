import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import ProductTile from '../../components/ProductTile'

const ProductList = () => {

  const {listOfProducts,loading} = useContext(ShoppingCartContext)

  if(loading) return <h1 className=' text-3xl font-extrabold'>Loading Data... Please wait</h1>
 
  return (
    <section className=' py-12 bg-white sm:py-16 lg:py-20'>
      <div className=' px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className=' max-w-md mx-auto text-center'>
        <h1 className=' text-3xl font-extrabold text-gray-950
          sm:text-4xl'>Our Fetured Products</h1>
        </div>
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10
         lg:mt-16 lg:gap-8'>
         {
          listOfProducts && listOfProducts?.length > 0 ?
          listOfProducts.map((singlePtroductTitle) => (
            <ProductTile singlePtroductTitle={singlePtroductTitle}/>
          ))
          : <h1>No Prouducts found</h1>
         }
        </div>
      </div>
    </section>
  )
}

export default ProductList
