import "../css/Cart.css"
import { useSelector} from "react-redux";
import Cart from "./Cart";

const Carts = () => {
  const itemList = useSelector((state)=> state.cart.itemList);
  let totalAllPrice = 0;
  itemList.forEach(item => {
    return totalAllPrice+=item.totalPrice;
  });

  return <section className="containerCart">
    <header>
      <h2>List Item Cart</h2>
      <h3>Total : ${totalAllPrice}</h3>
    </header>
    {itemList.map((item)=>{
      return <Cart key={item.id} item={item}/>
    })}
  </section>
}

export default Carts;