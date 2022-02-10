const OneBraceletCard = ({ itemBracelet }) => {
    return (
      <div className="card">
        <img src={itemBracelet.Img} width="80px" height="80px" />
          <h5>Company :{itemBracelet.Company}</h5>
          <h5>Size :{itemBracelet.Size}</h5>
          <h5>Model :{itemBracelet.Model}</h5>
          <h5>Gender :{itemBracelet.Gender}</h5>
          <h5>Price :{itemBracelet.Price} $</h5>
          <button className="clickShow">show more</button>
          <button className="clickBuy">buy</button>
      </div>
    );
  };
  export default OneBraceletCard;
