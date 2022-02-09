import NecklacesCards from "./Cards/NecklacesCards.Components";
import {NecklacesContext} from "../../../Context/NecklacesContext";

const Necklaces = () => {
  return (
    <NecklacesContext>
      <NecklacesCards />
    </NecklacesContext>
  );
};
export default Necklaces;
