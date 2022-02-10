import { createContext, useEffect, useState } from "react";
import { GetBraceletsData } from "../Service/BraceletsService.service";


export const BraceletsContext=createContext();

const BraceletsContextProvider=({children})=>{
    let [bracelets,setbracelets]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
   setIsLoading(true);
    GetBraceletsData().then((data)=>setbracelets(data.BraceletsList))
    .finally(()=>setIsLoading(false))
    console.log(bracelets)
    },[])
    return(
    <BraceletsContext.Provider value={{bracelets,setbracelets,isLoading}}>
        {children}
    </BraceletsContext.Provider>
    )
}
export default BraceletsContextProvider;