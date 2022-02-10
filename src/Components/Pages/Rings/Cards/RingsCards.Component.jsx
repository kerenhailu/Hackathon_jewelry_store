import { useContext } from "react";
import OneRingCard from "./OneRingCard.Component";
import { RingsContext } from "../../../../Context/RingsContext";

const RingsCards = () => {
  const { rings } = useContext(RingsContext);
  console.log(rings);
  return (
    <div>
      {rings.map((itemRing) => {
        return <OneRingCard itemRing={itemRing} />;
      })}
    </div>
  );
};
export default RingsCards;
