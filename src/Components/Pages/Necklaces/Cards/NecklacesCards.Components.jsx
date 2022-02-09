import { useContext } from "react";
import NecklacesContextProvider, { NecklacesContext } from "../../../../Context/NecklacesContext";
import OneNecklaceCard from "./OneNecklaceCard.Component";


const NecklacesCards = () => {
    const { Necklaces } = useContext(NecklacesContext);
    return (
      <div>
        {Necklaces.map((itemNecklaces) => (
          <OneNecklaceCard itemNecklaces={itemNecklaces} />
        ))}
      </div>
    );
  };
  export default NecklacesCards;