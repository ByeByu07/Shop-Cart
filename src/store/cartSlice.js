import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    itemList:[],
    totalQuantity:0,
    showCart:false,
    changed:false
  },
  reducers:{
    replaceDataAfterFetch(state,action){
      state.totalQuantity = action.payload.totalQuantity;
      state.itemList = action.payload.itemList
    },
    addToCart(state,action){
      state.changed = true
      const checkItem =  state.itemList.find((item)=> item.id === action.payload.id);
      const itemAddToList = action.payload;

      if(checkItem){
        checkItem.quantity++;
        checkItem.totalPrice+=itemAddToList.price;
      }else{
        state.itemList.push({
          id:itemAddToList.id,
          name:itemAddToList.name,
          quantity:1,
          price:itemAddToList.price,
          totalPrice:itemAddToList.price
        })
        state.totalQuantity++;
      }
    },
    showCart(state){
      state.showCart = !state.showCart
    },
    removeFromCart(state,action){
      state.changed = true
      const id = action.payload

      const itemInCart = state.itemList.find((item)=> item.id === id);

      if(itemInCart.quantity === 1){
        state.totalQuantity--;
        state.itemList =  state.itemList.filter((item)=> item.id !== id)
      }else{
        itemInCart.quantity--;
        itemInCart.totalPrice-=itemInCart.price;
      }
    }
  }
})

export const cartAction = cartSlice.actions;
export default cartSlice;