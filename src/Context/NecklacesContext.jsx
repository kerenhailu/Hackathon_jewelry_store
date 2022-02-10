import { createContext, useEffect, useState } from "react";
import { GetNecklacesData } from "../Service/NecklacesService.service";


export const NecklacesContext=createContext();

const NecklacesContextProvider=({children})=>{
    const [necklaces,setNecklaces]=useState([]);
    useEffect(()=>{
    GetNecklacesData().then((res)=>setNecklaces(res.NecklacesList))
    console.log(necklaces);
    },[])
    return(
    <NecklacesContext.Provider value={{necklaces,setNecklaces}}>
        {children}
    </NecklacesContext.Provider>
    )
}
export default NecklacesContextProvider;