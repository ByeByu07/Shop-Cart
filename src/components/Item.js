import "../css/Header.css"

const Item = (props) => {
  return <div className="container">
    <div>{props.item.img}</div>
    <div>{props.item.title}</div>
    <div>{props.item.price}</div>
  </div>
}

export default Item;