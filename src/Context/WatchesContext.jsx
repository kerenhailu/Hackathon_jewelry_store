import { createContext, useEffect, useState } from "react";
import { GetWatchesData } from "../Service/WatchesService.service";


export const  WatchesContext=createContext();

const WatchesContextProvider=({children})=>{
    const [watches,setWatches]=useState([]);
    useEffect(()=>{
    GetWatchesData()
    .then((res)=>setWatches(res.WatchesList))
    console.log(watches);
    },[])
    return(
    <WatchesContext.Provider value={{watches,setWatches}}>
        {children}
    </WatchesContext.Provider>
    )
}
export default WatchesContextProvider;