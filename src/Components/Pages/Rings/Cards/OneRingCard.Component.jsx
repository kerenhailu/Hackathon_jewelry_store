const OneRingCard = ({ itemRing }) => {
    return (
      <div className="card">
        <h1>Ring Card</h1>
          <img src={itemRing.Img} width="80px" height="80px" />
          <h5>Company :{itemRing.Company}</h5>
          <h5>Size :{itemRing.Size}</h5>
          <h5>Model :{itemRing.Model}</h5>
          <h5>Gender :{itemRing.Gender}</h5>
          <h5>Price :{itemRing.Price} $</h5>
          <button className="clickShow">show more</button>
          <button className="clickBuy">buy</button>
      </div>
    );
  };
  export default OneRingCard;