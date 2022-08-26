import "../css/Item.css"

const Item = ({item}) => {
  return <section className="containerItem">
    <div className="containerItem_image">
      <img src={item.img} width="50%" height="auto"/>
    </div>
    <div className="containerItem_text">
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
    <div className="containerItem_button">
      <button type="button">Add To Cart</button>
    </div>
  </section>
}

export default Item;