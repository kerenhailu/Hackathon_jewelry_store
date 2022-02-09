import { useContext } from "react";
import RingsContextProvider from "../../../../Context/RingsContext";
import OneRingCard from "./OneRingCard.Component";

const RingsCards = () => {
    const { rings,setRings } = useContext(RingsContextProvider);
    return (
      <div>
        {rings.map((itemRing) => (
          <OneRingCard itemRing={itemRing} />
        ))}
      </div>
    );
  };
  export default RingsCards;