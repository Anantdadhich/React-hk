import { useEffect, useState } from "react"

  //Custom hooks are a powerful feature in React that allow you to create reusable functions with stateful logic. This means you can encapsulate common patterns and functionalities within your React application, making your components cleaner, more organized, and easier to maintain.
function App() {
   const [render,setrender]=useState(true);
   
   useEffect(()=>{
    setTimeout(() => {
      setrender(false)
    }, 10000);
   },[])


   return <div>
   {render ?  <Mycom></Mycom> : <div/>}
   </div>
}
function Mycom(){
  useEffect(()=>{
    console.error("component mounted")
    return ()=>{   //these function runs when any time the dependencies are changed 
      console.log("unmounted")
    }
  },[])

  return <div>
    inside the component
  </div>
}

//export default App
