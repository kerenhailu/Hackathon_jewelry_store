import BraceletsCards from "./Cards/BraceletsCards.Component";
import {BraceletsContext} from "../../../Context/BraceletsContext";
import BraceletsContextProvider from "../../../Context/BraceletsContext";
import { useContext } from "react";
import Loading from "../Loading/Loading.Component";

const Bracelets = () => {
  const { isLoading } = useContext(BraceletsContext);
  return (
    <>
    {
      isLoading?<Loading/>:
    
    <BraceletsContextProvider>
      <BraceletsCards />
      <h1>Bracelets</h1>
    </BraceletsContextProvider>}
 </> );
};
export default Bracelets;
