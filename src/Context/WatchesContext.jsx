import { createContext, useEffect, useState } from "react";
import { GetWatchesData } from "../Service/WatchesService.service";


export const  WatchesContext=createContext();

const WatchesContextProvider=({Children})=>{
    const [watches,setWatchesData]=useState([]);
    useEffect(()=>{
    GetWatchesData()
    .then((res)=>setWatchesData(res.WatchesList))
    console.log();
    },[])
    return(
    <WatchesContext.Provider value={{watches,setWatchesData}}>
        {Children}
    </WatchesContext.Provider>
    )
}
export default WatchesContextProvider;