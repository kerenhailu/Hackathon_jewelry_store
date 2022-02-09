import NecklacesCards from "./Cards/NecklacesCards.Components";
import NecklacesContextProvider, {NecklacesContext} from "../../../Context/NecklacesContext";

const Necklaces = () => {
  return (
    <NecklacesContextProvider>
      <NecklacesCards />
    </NecklacesContextProvider>
  );
};
export default Necklaces;
