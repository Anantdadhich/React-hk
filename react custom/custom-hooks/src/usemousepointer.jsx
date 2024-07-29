import  { useState, useEffect }  from "react";


function useMousePointer(){
    const [mouse,setmouse]=useState({x:0,y:0})

    const handlemouse=(e)=>{
        setmouse({x:e.clientX,y:e.clientY})
    };

    useEffect(()=>{
        window.addEventListener('mousemove',handlemouse)
        return (()=>{
            window.removeEventListener("mousemove",handlemouse)
        })
    },[])
    return mouse
}

function App(){
    const mousepointer=useMousePointer();

    return <div>
        your pointer is that {mousepointer.x}{mousepointer.y}
    </div>
}

export default App