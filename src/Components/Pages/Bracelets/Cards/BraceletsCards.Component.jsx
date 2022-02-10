import { useContext } from "react";
import OneBraceletCard from "./OneBraceletCard.Component";
import { BraceletsContext } from "../../../../Context/BraceletsContext";
const BraceletsCards = () => {
  const { bracelets } = useContext(BraceletsContext);
  console.log(bracelets);
  return (
    <div>
      {bracelets.map((itemBracelet) => (
        <OneBraceletCard itemBracelet={itemBracelet} />
      ))}
    </div>
  );
};
export default BraceletsCards;
