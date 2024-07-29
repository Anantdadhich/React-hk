import { useState, useCallback, memo } from "react";

function App(){
    const [count,setcount]=useState(0)

    const click=useCallback(()=>{

    },[])

    return(
        <div>
            <Child hndclick={click}></Child>
            <button onClick={()=>{
                setcount(count +1)
            }}>click {count}</button>
        </div>
    )
}

const Child=memo(({hndclick})=>{
    return <div>
        <button>clicked</button>
    </div>
})

export default App;