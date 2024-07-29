import React, { useEffect, useState } from "react";
import axios from "axios";
function App(){
    const [todos,settodos]=useState([]);

    useEffect( ()=>{ 
  axios.get("https://sum-server.100xdevs.com/todos").then( function(res){
   
    settodos(res.data.todos); //axios  popular and powerful promise-based HTTP client for JavaScript
  })
      //by set inerval it render after elments after 10 seconds
},[])

    return ( <div>
        {todos.map(todo => <Todos title={todo.title} description={todo.description} />)}
    </div> )
}

function Todos({title,description}){
    return <div>
        <h2>
            {title}
        </h2>
        <h5>
            {description}
        </h5>
    </div>
}
//export default App;