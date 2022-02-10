import { createContext, useEffect, useState } from "react";
import { GetRingsData } from "../Service/RingsService.service";

export const RingsContext = createContext();

const RingsContextProvider = ({ children }) => {
  const [rings, setRings] = useState([]);
  useEffect(() => {
    GetRingsData()
    .then((res) => setRings(res.RingList));
  }, []);
  return (
    <RingsContext.Provider value={{ rings, setRings }}>
      {children}
    </RingsContext.Provider>
  );
};
export default RingsContextProvider;
