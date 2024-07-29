import { useState, useEffect } from "react";

function useInterval(fn,timeout){


    useEffect(()=>{
        setInterval(()=>{
        fn()
        },timeout)
    },[])
}

function App(){
    const [count,setcount]=useState(0)
    useInterval(()=>{
        setcount(c=>c+1)
    },1000)
     


    return <div>
        the timer is {count}
    </div>
}
export default App