import BraceletsCards from "./Cards/BraceletsCards.Component";
import {BraceletsContext} from "../../../Context/BraceletsContext";

const Bracelets = () => {
  return (
    <BraceletsContext>
      <BraceletsCards />
    </BraceletsContext>
  );
};
export default Bracelets;
