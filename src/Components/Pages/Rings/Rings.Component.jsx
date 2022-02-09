import RingsCards from "./Cards/RingsCards.Component";
import {RingsContext} from "../../../Context/RingsContext";

const Rings = () => {
  return (
    <RingsContext>
      <RingsCards />
    </RingsContext>
  );
};
export default Rings;
