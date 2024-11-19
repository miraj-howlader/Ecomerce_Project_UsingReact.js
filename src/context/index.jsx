import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext= createContext(null)


function ShoppingCartProvider({children}){
   
    const [loading,setLoading] = useState(false)
    const [listOfProducts,setListOfProducts] = useState([]);
    const [productDetails,setProductDetails] = useState(null);
    const [cartItems,setCartItems] = useState([])
    const navigate = useNavigate()
  
   

    async function fetchListOfProduct() {
        setLoading(true)
        const apiResponse = await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json();

        if(result?.products){
            setListOfProducts(result?.products);
            setLoading(false)
        }
    }


    
//  Add to cart 
   function handleAddToCart(getProductDetails){
 
     
    let cpyExistingCartItem = [...cartItems]
    const findIndexOfCurrentItem = cpyExistingCartItem.findIndex((cartItem) =>
    cartItem.id === getProductDetails.id)

   
    if(findIndexOfCurrentItem === -1){
        cpyExistingCartItem.push({
            ...getProductDetails,
            quantity: 1,
            totalPrice: getProductDetails?.price
        })
    }else{
      console.log('its comming from here')
      cpyExistingCartItem[findIndexOfCurrentItem] = {
        ...cpyExistingCartItem[findIndexOfCurrentItem],
        quantity: cpyExistingCartItem[findIndexOfCurrentItem].quantity +1,
        totalPrice: (cpyExistingCartItem[findIndexOfCurrentItem].quantity+1)
        * cpyExistingCartItem[findIndexOfCurrentItem].price
      }
    }
    setCartItems(cpyExistingCartItem)
    localStorage.setItem('cartItem', JSON.stringify(cpyExistingCartItem))
   navigate('/cart')
}

// Remove from cart 
function handleRemoveFromCart(getProductDetails,isFullyRemoveFromCart){
    let cpyExistingCartItem = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItem.findIndex(item=>
        item.id === getProductDetails.id
    )
    if(isFullyRemoveFromCart){
        cpyExistingCartItem.splice(findIndexOfCurrentItem, 1)
    }else{
        cpyExistingCartItem[findIndexOfCurrentItem] = {
            ...cpyExistingCartItem[findIndexOfCurrentItem],
            quantity: cpyExistingCartItem[findIndexOfCurrentItem].quantity - 1,
            totalPrice: (cpyExistingCartItem[findIndexOfCurrentItem].quantity -1) * cpyExistingCartItem[findIndexOfCurrentItem].price
        }
    }
    localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItem));
    setCartItems(cpyExistingCartItem)
}



    useEffect(() => {
        fetchListOfProduct()
        setCartItems(JSON.parse(localStorage.getItem('cartItem') || []))
    }, [])



    return <ShoppingCartContext.Provider value={{
        listOfProducts,loading,productDetails,
        setProductDetails,setLoading,cartItems,setCartItems,
        handleAddToCart,handleRemoveFromCart
    }}>
        {children}
    </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;