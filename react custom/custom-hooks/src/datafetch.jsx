import { useState, useEffect } from "react"
import axios from "axios"

//data fetching is much cleaner 
// it hits the backend with most 
function useTodos(){


    const [todos,settodos]=useState([]);

    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res=>{
            settodos(res.data.todos)
        })
    },[])

    return todos
 
}
// my main function is much cleaner than previous

function App(){

    const todos=useTodos();
   

    return <div>
        {todos.map(todo=> (<Track todo={todo} key={todo.id}></Track>))}
    </div> 

    
}
function Track({todo}){
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

//export default App