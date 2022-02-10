import WatchCards from "./Cards/WathesCards.Component";
import WatchesContextProvider from "../../../Context/WatchesContext";
const Watches = () => {
  return (
    <WatchesContextProvider>
      <WatchCards />
    </WatchesContextProvider>
  );
};
export default Watches;
