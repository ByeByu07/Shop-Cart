import Header from "./components/Header";
import {data} from "./data/data";
import Items from "./components/Items";
import {useDispatch, useSelector} from "react-redux";
import Login from "./components/Login";
import Carts from "./components/Carts";
import {Alert} from "@mui/material"
import { useEffect} from "react";
import {sendDataDB,fetchData} from "./store/cartFetchData"
let firstRender = true;

function App() {
  
  const isLogging = useSelector((state)=>state.auth.isLoggedIn)
  const showCart = useSelector((state)=> state.cart.showCart)
  const cart = useSelector((state)=> state.cart)
  const notification = useSelector((state)=> state.ui.notif)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  useEffect(()=>{
    if(firstRender)
    {
      firstRender = false;
      return;
    }
    if(cart.changed)
    {
      dispatch(sendDataDB(cart))
    }
  },[dispatch,cart])


  if(!isLogging)
    return  <Login/>

  if(showCart)
    return <>
      <Header/>
      <Carts/>
    </>

  return (
    <>
      {notification && <Alert variant={notification.variant} severity={notification.severity}>{notification.message}</Alert>}
      <Header/>
      <Items data={data}/>
    </>
  );
  
}

export default App;
