import Header from "./components/Header";
import {data} from "./data/data";
import Item from "./components/Item";

function App() {
  // console.log(data);

  return (
    <>
      <Header/>
      <div>
        {data.map((item,i)=><Item key={i} item={item}/>)}
      </div>  
    </>
  );
}

export default App;