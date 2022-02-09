import { useContext } from "react";
import {RingsContext} from "../../../../Context/RingsContext";
import OneRingCard from "./OneRingCard.Component";

const RingsCards = () => {
    const { rings,setRings } = useContext(RingsContext);
    return (
      <div>
        {rings.map((itemRing) => (
          <OneRingCard itemRing={itemRing} />
        ))}
      </div>
    );
  };
  export default RingsCards;