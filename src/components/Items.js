import Item from "./Item"
import "../css/Items.css"

const Items = ({data}) => {
  return <div className="containerItems">
    <header>
      <h1>List Of Product of the Day</h1>
    </header>
    <div className="itemBox">
      {data.map((item,i)=><Item key={i} item={item}/>)}
    </div>
  </div>
}

export default Items;