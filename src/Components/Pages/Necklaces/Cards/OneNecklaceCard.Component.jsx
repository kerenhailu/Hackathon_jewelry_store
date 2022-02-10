const OneNecklaceCard = ({ itemNecklace }) => {
    return (
      <div>
        <section>
        <h1>Necklace Card !!:</h1>
          <h3>Has_Warranty :{itemNecklace.Has_Warranty}</h3>
          <h5>Company :{itemNecklace.Company}</h5>
          <h3>Waterproof :{itemNecklace.Waterproof}</h3>
          <h5>Color :{itemNecklace.Color}</h5>
          <h5>Size :{itemNecklace.Size}</h5>
          <h5>Model :{itemNecklace.Model}</h5>
          <h5>Gender :{itemNecklace.Gender}</h5>
          <h5>Price :{itemNecklace.Price}</h5>
          <img src={itemNecklace.Img} width="80px" height="80px" />
          <button>show more</button>
          <button>buy</button>
        </section>
      </div>
    );
  };
  export default OneNecklaceCard;