const BraceletsCards = () => {
    const { Bracelets, setBracelets } = useContext(ContextProviderPants);
    return (
      <div>
        {pants.map((itemBracelet) => (
          <CardPants itemBracelet={itemBracelet} />
        ))}
      </div>
    );
  };
  export default BraceletsCards;
  