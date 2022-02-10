const OneNecklaceCard = ({ itemNecklace }) => {
    return (
      <div className="card">
          <img src={itemNecklace.Img} width="80px" height="80px" />
          <h5>Company :{itemNecklace.Company}</h5>
          <h5>Size :{itemNecklace.Size}</h5>
          <h5>Model :{itemNecklace.Model}</h5>
          <h5>Gender :{itemNecklace.Gender}</h5>
          <h5>Price :{itemNecklace.Price} $</h5>
          <button className="clickShow">show more</button>
          <button className="clickBuy">buy</button>
      </div>
    );
  };
  export default OneNecklaceCard;