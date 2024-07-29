import { useEffect, useState } from "react";


function useIsOnline(){
const [isonline,setonline]=useState(window.navigator.onLine)
 useEffect(()=>{
    window.addEventListener("online",()=>{
        setonline(true);
    })

    window.addEventListener("ofline",()=>{
        setonline(false)
    })
 },[])
return isonline

}


function App(){

    const isonline=useIsOnline();
    if(isonline)
    {
        return "you are online "
    }
    return "you are not online "
}

export default App