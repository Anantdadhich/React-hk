import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
 const [todos,setCount]= useState([{
  title:'gym',
  descreption:'go to gym 3to 4',
  completed:true

 },
{
  title:'dsa',
  descreption:'go to study',
   completed:true
}]);

function addtodo(){
  setCount([...todos,{

  }])
  todos=[...todos,{
     
  }]
}
 
return(
  <div>
    <button onClick={addtodo}>add a random todo</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} descreption={todo.descreption} ></Todo>
    })}
  </div>
)
 }

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.descreption}</h1>
    </div>
  )
}
/*
  return (
    
      <div> hi there i am ad 
         <Custombutton count={count} setCount={setCount} ></Custombutton>
         <Custombutton setCount={setCount} count={count+1} ></Custombutton>
         <Custombutton setCount={setCount} count={count-1} ></Custombutton>
         <Custombutton setCount={setCount} count={count*100} ></Custombutton>
          </div>
        
     
  )  */

 /*
function Custombutton(props){
  function onclickhandler(){
    props.setCount(props.count+1)
  }
  return <button onClick={onclickhandler}>
    counter{props.count}
  </button>
}   */

export default App
