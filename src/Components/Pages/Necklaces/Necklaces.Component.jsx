import NecklacesCards from "./Cards/NecklacesCards.Components";
import NecklacesContextProvider from "../../../Context/NecklacesContext";

const Necklaces = () => {
  return (
    <NecklacesContextProvider>
      <NecklacesCards />
    </NecklacesContextProvider>
  );
};
export default Necklaces;
