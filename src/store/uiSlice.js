import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name:"ui",
  initialState:{notif:null},
  reducers:{
    showNotif(state,action){
      state.notif={
        message:action.payload.message,
        variant : action.payload.variant || "filled",
        severity:action.payload.severity
      }
    },
    closeNotif(state){
      state.notif = null
    }
  }
})

export const uiAction = uiSlice.actions;
export default uiSlice;