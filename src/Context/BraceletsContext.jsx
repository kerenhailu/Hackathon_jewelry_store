import { createContext, useEffect, useState } from "react";
import { GetBraceletsData } from "../Service/BraceletsService.service";


export const BraceletsContext=createContext();

const BraceletsContextProvider=({Children})=>{
    let [bracelets,setbracelets]=useState([]);
    useEffect(()=>{
    GetBraceletsData().then((res)=>setbracelets(res.BraceletsList[0]))
    console.log(bracelets)
    },[])
    return(
    <BraceletsContext.Provider value={{bracelets,setbracelets}}>
        {Children}
    </BraceletsContext.Provider>
    )
}
export default BraceletsContextProvider;