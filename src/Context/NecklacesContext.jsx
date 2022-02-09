import { createContext, useEffect, useState } from "react";


const NecklacesContext=createContext();

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