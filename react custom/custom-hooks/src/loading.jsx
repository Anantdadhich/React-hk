import { useState, useEffect } from "react"
import axios from "axios"

//data fetching is much cleaner 
// it hits the backend with most 
function useTodos(n){


    const [todos,settodos]=useState([]);
   const [loading,setloading]=useState(true)
    useEffect(()=>{
   const value=     setInterval(()=>{
               axios.get("https://sum-server.100xdevs.com/todos")
        .then(res=>{
            settodos(res.data.todos)
            setloading(false)
        })
        },n*1000)
           axios.get("https://sum-server.100xdevs.com/todos")
        .then(res=>{
            settodos(res.data.todos)
            setloading(false)
        })
        return ()=>{
            clearInterval(value)
        }
     
    },[n])

    return {todos,loading}
 
}
// my main function is much cleaner than previous

function App(){

    const {todos,loading}=useTodos(4);
   
    if(loading){
        return <div>
            loading
        </div>
    }

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

export default App