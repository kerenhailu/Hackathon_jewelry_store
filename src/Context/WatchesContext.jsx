import { createContext, useEffect, useState } from "react";


const  WatchesContext=createContext();

const WatchesContextProvider=({Children})=>{
    const [watches,setWatches]=useState(WatchesContext);
    useEffect(()=>{
    GetWatchesData().then((res)=>setWatches(res.WatchesList))
    },[])
    return(
    <WatchesContext.Provider value={{watches,setWatches}}>
        {Children}
    </WatchesContext.Provider>
    )
}
export default WatchesContextProvider;