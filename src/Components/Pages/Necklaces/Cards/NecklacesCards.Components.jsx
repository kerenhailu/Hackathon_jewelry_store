import { useContext } from "react";
import  { NecklacesContext } from "../../../../Context/NecklacesContext";
import OneNecklaceCard from "./OneNecklaceCard.Component";


const NecklacesCards = () => {
    const { necklaces } = useContext(NecklacesContext);
    return (<div className="cardWrapper">
        {necklaces.map((itemNecklace) => (
          <OneNecklaceCard itemNecklace={itemNecklace} />
        ))}
      </div>
    );
  };
  export default NecklacesCards;
