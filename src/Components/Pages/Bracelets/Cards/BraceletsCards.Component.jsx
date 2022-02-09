import { useContext } from "react";
import BraceletsContextProvider from "../../../../Context/BraceletsContext";
import OneBraceletCard from "./OneBraceletCard.Component";

const BraceletsCards = () => {
  const { Bracelets, setBracelets } = useContext(BraceletsContextProvider);
  return (
    <div>
      {Bracelets.map((itemBracelet) => (
        <OneBraceletCard itemBracelet={itemBracelet} />
      ))}
    </div>
  );
};
export default BraceletsCards;
