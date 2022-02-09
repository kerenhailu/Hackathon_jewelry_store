import RingsCards from "./Cards/RingsCards.Component";
import RingsContextProvider, {RingsContext} from "../../../Context/RingsContext";

const Rings = () => {
  return (
    <RingsContextProvider>
      <RingsCards />
    </RingsContextProvider>
  );
};
export default Rings;
