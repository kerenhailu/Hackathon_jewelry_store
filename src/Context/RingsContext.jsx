import { createContext, useEffect, useState } from "react";

const RingsContext=createContext();

const RingsContextProvider=({Children})=>{
    const [rings,setRings]=useState(RingsContext);
    useEffect(()=>{
    GetRingsData().then((res)=>setRings(res.RingsList))
    },[])
    return(
    <RingsContext.Provider value={{rings,setRings}}>
        {Children}
    </RingsContext.Provider>
    )
}
export default RingsContextProvider;