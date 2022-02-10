const OneWatchCard = ({ itemWatch }) => {

  return (
    <div className="card">
        <img src={itemWatch.Img}/>
        <h2>{itemWatch.Company}</h2>
        <h5>Size :{itemWatch.Size}</h5>
        <h5>Model :{itemWatch.Model}</h5>
        <h5>Gender :{itemWatch.Gender}</h5>
        <h5>Price :{itemWatch.Price}</h5>
        <button className="clickShow">show more</button>
          <button className="clickBuy">buy</button>
    
    </div>
  );
};
export default OneWatchCard;
