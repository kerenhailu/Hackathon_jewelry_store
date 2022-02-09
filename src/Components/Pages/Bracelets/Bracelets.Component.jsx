import BraceletsCards from "./Cards/BraceletsCards.Component";
import {BraceletsContext} from "../../../Context/BraceletsContext";
import BraceletsContextProvider from "../../../Context/BraceletsContext";

const Bracelets = () => {
  return (
    <BraceletsContextProvider>
      <BraceletsCards />
      <h1>Bracelets</h1>
    </BraceletsContextProvider>
  );
};
export default Bracelets;
