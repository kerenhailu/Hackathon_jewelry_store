import { createContext, useEffect, useState } from "react";
import { GetNecklacesData } from "../Service/NecklacesService.service";


export const NecklacesContext=createContext();

const NecklacesContextProvider=({Children})=>{
    const [necklaces,setNecklaces]=useState(NecklacesContext);
    useEffect(()=>{
    GetNecklacesData().then((res)=>setNecklaces(res.NecklacesList))
    },[])
    return(
    <NecklacesContext.Provider value={{necklaces,setNecklaces}}>
        {Children}
    </NecklacesContext.Provider>
    )
}
export default NecklacesContextProvider;