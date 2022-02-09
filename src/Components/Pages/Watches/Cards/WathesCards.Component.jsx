import WatchesContextProvider from "../../../../Context/WatchesContext";

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
