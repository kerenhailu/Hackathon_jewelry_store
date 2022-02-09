import { createContext, useEffect, useState } from "react";
import { GetBraceletsData } from "../Service/BraceletsService.service";


const BraceletsContext=createContext();

const BraceletsContextProvider=({Children})=>{
    const [bracelets,setbracelets]=useState(BraceletsContext);
    useEffect(()=>{
    GetBraceletsData().then((res)=>setbracelets(res.RingsList))
    },[])
    return(
    <BraceletsContext.Provider value={{bracelets,setbracelets}}>
        {Children}
    </BraceletsContext.Provider>
    )
}
export default BraceletsContextProvider;