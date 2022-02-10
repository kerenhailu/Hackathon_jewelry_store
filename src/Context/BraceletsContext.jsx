import { createContext, useEffect, useState } from "react";
import { GetBraceletsData } from "../Service/BraceletsService.service";


export const BraceletsContext=createContext();

const BraceletsContextProvider=({children})=>{
    let [bracelets,setbracelets]=useState([]);
    useEffect(()=>{
    GetBraceletsData().then((data)=>setbracelets(data.BraceletsList))
    console.log(bracelets)
    },[])
    return(
    <BraceletsContext.Provider value={{bracelets,setbracelets}}>
        {children}
    </BraceletsContext.Provider>
    )
}
export default BraceletsContextProvider;