import { cartAction } from "./cartSlice";
import { uiAction } from "./uiSlice";

export const fetchData = () => {
  return async(dispatch)=>{
    const fetchHandler = async() => {

      const response = await fetch(process.env.REACT_APP_ENDPOINT_FIREBASE_DB + process.env.REACT_APP_NAME )
      const data = response.json();
      return data;
    }
    try{
      const itemAfterFetch = await fetchHandler();
      dispatch(cartAction.replaceDataAfterFetch(itemAfterFetch))

    }catch(err){
      dispatch(uiAction.showNotif({
        message:"Failed fetch data from DB",
        variant:"filled",
        severity:"error"
      }))
    }
  }
}

export const sendDataDB = (cart) => {
  
  return async(dispatch) => {

    dispatch(uiAction.showNotif({
      open:true,
      message:"Wait a Minute....",
      variant:"filled",
      severity:"warning"
    }))

    const response =  async() => {
      const response = await fetch("https://shop-cart-simple-default-rtdb.asia-southeast1.firebasedatabase.app/item-in-cart.json",
      {
        method:"PUT",
        body:JSON.stringify(cart)
      })
      const data = await response.json();

      dispatch(uiAction.showNotif({
        message:"Success add to cart",
        variant:"filled",
        severity:"success"
      }))

      setTimeout(()=>{dispatch(uiAction.closeNotif())},1000)
    }

    try{
      await response();
    }catch(err){
      dispatch(uiAction.showNotif({
        message:"Failed add item to Cart",
        variant:"filled",
        severity:"error"
      }))
    }

  }
}