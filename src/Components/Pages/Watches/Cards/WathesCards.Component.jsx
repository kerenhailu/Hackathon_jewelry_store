import { useContext } from "react";
import WatchesContextProvider from "../../../../Context/WatchesContext";
import OneNecklaceCard from "../../Necklaces/Cards/OneNecklaceCard.Component";

const WatchCards = () => {
  const { Watch, setWatch } = useContext(WatchesContextProvider);
  return (
    <div>
      {Watch.map((itemWatch) => (
        <OneNecklaceCard itemWatch={itemWatch} />
      ))}
    </div>
  );
};
export default WatchCards;
