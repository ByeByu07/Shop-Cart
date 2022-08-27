import { cartAction } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = ({item}) => {

  const dispacth = useDispatch();
  const incrementItem = () =>{
    dispacth(cartAction.addToCart({
      id:item.id,
      price:item.price
    }))
  }

  const decrementItem = () =>{
    dispacth(cartAction.removeFromCart(item.id))
  }

  return <article className="itemCartList">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <p>x {item.quantity}</p>
        <p>${item.totalPrice}</p>
          <div className="buttonCartList">
            <button onClick={incrementItem}>+</button>
            <button onClick={decrementItem}>-</button>
          </div>
      </article>
    
}

export default Cart;