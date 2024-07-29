import { useEffect, useState } from "react";
import axios from "axios"

function App(){
    const [selectid,setselectid]=useState(1)
return (
    <div>
         <button onClick={function (){
            setselectid(1)
         }}>1</button>
         <button onClick={function (){
            setselectid(2)
         }}>2</button>
         <button onClick={function (){
            setselectid(3)
         }}>3</button>
          <button onClick={function (){
            setselectid(4)
         }}>4</button>
        <Todo id={selectid}></Todo>
    </div>
)

}


function Todo({id}){
const[todos,settodos]=useState({});

useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(function (res){
        settodos(res.data.todos)
    })
 },[id]); // we set depepndency to re run or rerender

    return <div>
        Id:{id}
        <h1>
            {todos.title}
        </h1>
        <h3>
            {todos.description}
        </h3>
    </div>

}
//export default App();