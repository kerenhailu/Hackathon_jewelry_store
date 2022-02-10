import { createContext, useEffect, useState } from "react";
import {GetRingsData} from "../Service/RingsService.service";
const RingsContext = createContext();

const RingsContextProvider = ({ children }) => {
  const [rings, setRings] = useState(RingsContext);
  useEffect(() => {
    GetRingsData().then((res) => setRings(res.RingsList));
  }, []);
  return (
    <RingsContext.Provider value={{ rings, setRings }}>
      {children}
    </RingsContext.Provider>
  );
};
export default RingsContextProvider;
