const OneRingCard = ({ itemRing }) => {
    return (
      <div>
        <section>
        <h1>Ring Card !!:</h1>
          <h3>Has_Warranty :{itemRing.Has_Warranty}</h3>
          <h5>Company :{itemRing.Company}</h5>
          <h3>Waterproof :{itemRing.Waterproof}</h3>
          <h5>Color :{itemRing.Color}</h5>
          <h5>Size :{itemRing.Size}</h5>
          <h5>Model :{itemRing.Model}</h5>
          <h5>Gender :{itemRing.Gender}</h5>
          <h5>Price :{itemRing.Price}</h5>
          <img src={itemRing.Img} width="80px" height="80px" />
        </section>
      </div>
    );
  };
  export default OneRingCard;