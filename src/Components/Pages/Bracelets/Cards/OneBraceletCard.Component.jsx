const OneBraceletCard = ({ itemBracelet }) => {
    return (
      <div>
        <section>
        <h1>Pants Card !!:</h1>
          <h3>ClothModel :{itemBracelet.ClothModel}</h3>
          <h5>IsShort :{itemBracelet.IsShort}</h5>
          <h5>Amount :{itemBracelet.Amount}</h5>
          <h5>IsDreyfit :{itemBracelet.IsDreyfit}</h5>
          <h5>Gender :{itemBracelet.Gender}</h5>
          <h5>Price :{itemBracelet.Price}</h5>
          <h5>Company :{itemBracelet.Company}</h5>
          <img src={itemBracelet.Img} width="50px" height="50px" />
        </section>
      </div>
    );
  };
  export default OneBraceletCard;