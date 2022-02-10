import { useContext } from "react";
import OneRingCard from "./OneRingCard.Component";
import { RingsContext } from "../../../../Context/RingsContext";

const RingsCards = () => {
    const { rings } = useContext(RingsContext);
    return (
      <div>
        {rings.map((itemRing) => (
          <OneRingCard itemRing={itemRing} />
        ))}
      </div>
    );
  };
  export default RingsCards;