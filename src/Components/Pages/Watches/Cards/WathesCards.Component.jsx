import { useContext } from "react";
import { WatchesContext } from "../../../../Context/WatchesContext";
import OneWatchCard from "./OneWatchCard.Component";

const WatchCards = () => {
  const { watches } = useContext(WatchesContext);
  console.log(watches);
  return (
    <section>
      <h1>Our Watches</h1>
      <div className="cardWrapper">
        {watches.map((itemWatch) => (
          <OneWatchCard itemWatch={itemWatch} />
        ))}
      </div>
    </section>
  );
};
export default WatchCards;
