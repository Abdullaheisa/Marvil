import { createContext, useEffect, useState } from "react";



export const IsMobileContext= createContext()


export function IsMobileProvider({children}){
    const [isMobile,setIsMobile]= useState(null);
    const checkMobile =(e)=>{
        setIsMobile(e.matches)
    }
    useEffect(()=>{
        window.matchMedia("(max-width:1024px)").addEventListener("change",checkMobile);
        // checkMobile;
        setIsMobile(window.matchMedia("(max-width:1024px)").matches);
    },[])
   return <IsMobileContext.Provider value={{isMobile}}>

    {children}
   </IsMobileContext.Provider>
}
