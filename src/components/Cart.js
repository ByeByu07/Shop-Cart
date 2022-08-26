import "../css/Cart.css"
import { useSelector,useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";

const Cart = () => {
  const dispacth = useDispatch();
  const itemList = useSelector((state)=> state.cart.itemList);
  let totalAllPrice = 0;
  itemList.forEach(item => {
    return totalAllPrice+=item.totalPrice;
  });

  const incrementItem = () =>{
    dispacth(cartAction.addToCart({
    }))
  }

  const decrementItem = () =>{

  }

  return <section className="containerCart">
    <header>
      <h2>List Item Cart</h2>
      <h3>Total : ${totalAllPrice}</h3>
    </header>
    <div>
      {itemList.map((item)=>{
        return <article key={item.id} className="itemCartList">
          <h4>{item.name}</h4>
          <p>{item.quantity}</p>
          <p>${item.totalPrice}</p>
          <div className="buttonCartList">
            <button onClick={incrementItem}>+</button>
            <button onClick={decrementItem}>-</button>
          </div>
        </article>
      })}
    </div>
  </section>
}

export default Cart;