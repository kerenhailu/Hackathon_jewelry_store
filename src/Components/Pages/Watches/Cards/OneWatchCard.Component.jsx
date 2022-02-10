const OneWatchCard = ({ itemWatch }) => {
  return (
    <div className="card">
        <img src={itemWatch.Img}/>
        <h2>{itemWatch.Company}</h2>
        <h3>Waterproof :{itemWatch.Waterproof}</h3>
        <h5>Color :{itemWatch.Color}</h5>
        <h5>Size :{itemWatch.Size}</h5>
        <h5>Model :{itemWatch.Model}</h5>
        <h5>Gender :{itemWatch.Gender}</h5>
        <h5>Price :{itemWatch.Price}</h5>
    </div>
  );
};
export default OneWatchCard;
