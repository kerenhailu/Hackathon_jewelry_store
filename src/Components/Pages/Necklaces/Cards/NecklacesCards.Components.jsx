import { useContext } from "react";
import NecklacesContextProvider from "../../../../Context/NecklacesContext";
import OneNecklaceCard from "./OneNecklaceCard.Component";


const NecklacesCards = () => {
    const { Necklaces, setNecklaces } = useContext(NecklacesContextProvider);
    return (
      <div>
        {Necklaces.map((itemNecklaces) => (
          <OneNecklaceCard itemNecklaces={itemNecklaces} />
        ))}
      </div>
    );
  };
  export default NecklacesCards;