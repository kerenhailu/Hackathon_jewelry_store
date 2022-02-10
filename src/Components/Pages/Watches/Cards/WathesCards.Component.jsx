import { useContext } from "react";
import { WatchesContext } from "../../../../Context/WatchesContext";
import OneWatchCard from "./OneWatchCard.Component";

const WatchCards = () => {
  const {watches} = useContext(WatchesContext);
  console.log(watches);
  return (
    <div>
      {watches.map((itemWatch) => (
        <OneWatchCard itemWatch={itemWatch} />
      ))}
    </div>
  );
};
export default WatchCards;
