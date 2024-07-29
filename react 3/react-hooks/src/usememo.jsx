import { memo, useEffect, useMemo, useState } from "react";

function Memo(){
    const[counter,setcounter]=useState(1); //as we know usestsate is a state variable
    const[inputvalue,setvalue]=useState(0);

//we define always state variable because due to refrenceial equality
    let counted= useMemo(()=>{
       let count=0;

    for(let i=0;i<=inputvalue;i++){
        count=count+i;
    }  
    return count;
    },[inputvalue]) //we give dependency arrya as a inputlvue which user will store
   

    return (
        <div>
            <input onChange={function(e){
                setvalue(e.target.value)
            }}  placeholder={"find the sum "}
             />
             <br />
            sum from 1 to{inputvalue} is{counted}
            <br />
            <button onClick={()=>{
                setcounter(counter+1);

            }}>counter({counter})</button>
        </div>
    )
}

//export default Memo;