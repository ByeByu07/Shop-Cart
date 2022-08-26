import Header from "./components/Header";
import {data} from "./data/data";
import Items from "./components/Items";
import {useSelector} from "react-redux";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  
  const isLogging = useSelector((state)=>state.auth.isLoggedIn)
  // const itemList = useSelector((state)=> state.cart.itemList)
  const showCart = useSelector((state)=> state.cart.showCart)

  if(!isLogging)
    return  <Login/>

  if(showCart)
    return <>
      <Header/>
      <Cart/>
    </>

  return (
    <>
      <Header/>
      <Items data={data}/>
    </>
  );

}

export default App;