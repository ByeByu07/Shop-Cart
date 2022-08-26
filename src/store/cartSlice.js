import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    itemList:[],
    totalQuantity:0,
    showCart:false
  },
  reducers:{
    addToCart(state,action){
      const checkItem = state.itemList.find((item)=> item.id === action.payload.id);
      const itemAddToList = action.payload;

      if(checkItem){
        checkItem.quantity++;
        checkItem.totalPrice+=itemAddToList.price;
      }else{
        state.itemList.push({
          id:itemAddToList.id,
          name:itemAddToList.name,
          quantity:1,
          totalPrice:itemAddToList.price
        })
        state.totalQuantity++;
      }
    },
    showCart(state){
      state.showCart = !state.showCart
    }
  }
})

export const cartAction = cartSlice.actions;
export default cartSlice;