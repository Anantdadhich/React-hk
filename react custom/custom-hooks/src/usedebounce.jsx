import { useEffect, useState } from "react"


function useDebounce(value,delay){
  
    const [debounce,setdebounce]=useState()

    useEffect(()=>{
     let timer=   setTimeout(()=>{
            setdebounce(value)
        },delay)
        return ()=>{
         clearTimeout(timer)
        }
    },[value])
    return debounce
}

function App(){

   
       const [value,setvalue]=useState(0)
       const debouncedvalue=useDebounce(value,500)
 

 return <div>
    the value is {debouncedvalue}
    <input type="text"  placeholder="Search" onChange={(e)=>{
        setvalue(e.target.value)
    }}/>
 </div>
}
export default App