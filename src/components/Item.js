import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";
import "../css/Item.css"

const Item = ({item}) => {

  const dispacth = useDispatch();
  const addCart = () => {
    dispacth(cartAction.addToCart({
      id:item.id,
      name:item.name,
      price:item.price,
    }))
  }
  return <section className="containerItem">
    <div className="containerItem_image">
      <img src={item.img} width="50%" height="auto" alt=""/>
    </div>
    <div className="containerItem_text">
      <p>{item.name}</p>
      <p>${item.price}</p>
    </div>
    <div className="containerItem_button">
      <button type="button" onClick={addCart}>Add To Cart</button>
    </div>
  </section>
}

export default Item;