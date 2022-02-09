import WatchCards from "./Cards/WathesCards.Component";
import {WatchesContext} from "../../../Context/WatchesContext"; 
const Watches = () => {
  return (
    <WatchesContext>
      <WatchCards />
    </WatchesContext>
  );
};
export default Watches;
