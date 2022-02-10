import RingsCards from "./Cards/RingsCards.Component";
import RingsContextProvider from "../../../Context/RingsContext";

const Rings = () => {
  return (
    <RingsContextProvider>
      <RingsCards />
    </RingsContextProvider>
  );
};
export default Rings;
