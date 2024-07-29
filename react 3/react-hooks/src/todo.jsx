import { useState } from "react";

function App(){
 const [todos,setTodos]=useState([{ 
    id:1,
    title:"heloo",
    description:"jdifjiejf"
 },{
    id:2,
    title:"heefvef",
    description:"jdifjiefvffv"
 },
 {
    id:1,
    title:"hefee",
    description:"jdifjiejffvrf"
 }
]);
function addtodo(){
setTodos([...todos,{    //... spreads operator 
    id:4,
    title:Math.random(),
    description:Math.random()
}])
}
 return(
    <div>
        <button onClick={addtodo}>add a todo</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
 )   //key is used to write the list in right way 
    //we specifically identifying a elment from key 
}
function Todo({title,description}){
    return <div>
        <h1>
            {title}
        </h1>
        <h3>
            {description}
        </h3>
    </div>
}
//export default App;