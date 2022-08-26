import Header from "./components/Header";
import {data} from "./data/data";
import Items from "./components/Items";
import {useSelector} from "react-redux";
import Login from "./components/Login";

function App() {
  
  const isLogging = useSelector((state)=>state.auth.isLoggedIn)

  if(!isLogging)
    return  <Login/>

  return (
    <>
      <Header/>
      <Items data={data}/>
    </>
  );
}

export default App;