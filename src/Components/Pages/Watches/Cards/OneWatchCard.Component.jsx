const OneWatchCard = ({ itemWatch }) => {
  return (
    <div>
      <section>
        <h1>Watch Card !!:</h1>
        <h3>Has_Warranty :{itemWatch.Has_Warranty}</h3>
        <h5>Company :{itemWatch.Company}</h5>
        <h3>Waterproof :{itemWatch.Waterproof}</h3>
        <h5>Color :{itemWatch.Color}</h5>
        <h5>Size :{itemWatch.Size}</h5>
        <h5>Model :{itemWatch.Model}</h5>
        <h5>Gender :{itemWatch.Gender}</h5>
        <h5>Price :{itemWatch.Price}</h5>
        <img src={itemWatch.Img} width="80px" height="80px" />
      </section>
    </div>
  );
};
export default OneWatchCard;
