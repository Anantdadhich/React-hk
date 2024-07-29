//prop drilling does not mean parent render children it mean syntatic uneasiness in code 
import { useState } from "react";

function App(){
 const [count,setcount]=useState(0);

 return <div>
    <Count count={count}></Count>
    <Button count={count} setcount={setcount} ></Button>
 </div>

}

function Count({count}){
    return <div>
        {count}
    </div>
}

function Button({count,setcount}){
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