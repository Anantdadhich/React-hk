
//if we were using a context api we are pushing a state managment outside the react components means your logic of state
// the context api never solves the problem of re render 
import { useContext, useState } from "react";
import { Contextapi } from "./context";

function App(){
 const [count,setcount]=useState(0); 
 
 //wrap anyone that wants to be use teleported value inside a provider
 return <div>
   <Contextapi.Provider value={count}>
   <Count  setcount={setcount}></Count>    
   </Contextapi.Provider>

 </div>

}
function Count({setcount}){
  return  <><Countrender > </Countrender>
    <Button  setcount={setcount}> </Button></>
}


function Countrender(){
   const count=useContext(Contextapi)
  return <div>
        {count}
    </div>
}

function Button({setcount}){
   const count=useContext(Contextapi)
   return <div>
        <button onClick={()=>{
        setcount(count+1)
        }}>increase</button>
           <button onClick={()=>{
           setcount(count -1) 
        }}>decrease</button>
    </div>
}

export default App;