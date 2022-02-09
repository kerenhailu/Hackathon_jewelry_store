const OneBraceletCard = ({ itemBracelet }) => {
    return (
      <div>
        <section>
        <h1>Bracelet Card !!:</h1>
        <h3>Has_Warranty :{itemBracelet.Has_Warranty}</h3>
          <h5>Company :{itemBracelet.Company}</h5>
          <h3>Waterproof :{itemBracelet.Waterproof}</h3>
          <h5>Color :{itemBracelet.Color}</h5>
          <h5>Size :{itemBracelet.Size}</h5>
          <h5>Model :{itemBracelet.Model}</h5>
          <h5>Gender :{itemBracelet.Gender}</h5>
          <h5>Price :{itemBracelet.Price}</h5>
          <img src={itemBracelet.Img} width="80px" height="80px" />
        </section>
      </div>
    );
  };
  export default OneBraceletCard;