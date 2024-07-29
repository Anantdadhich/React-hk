//create a todo application with filtering todo logic
//todos,filter 
//2 todos boxes[title,description]
// fiter(gym)=> atom 
//selector for current set of todos
import { filteredtodos, todolistfilterstate } from "./atoms/todolist";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";




function App(){
return <div>
    <RecoilRoot>
        <Filtercompo></Filtercompo>
        <Todolist></Todolist>
    </RecoilRoot>
</div>
}

function Filtercompo(){
    const[filter,setfilter]=useRecoilState(todolistfilterstate)

    return <div>
        <label htmlFor="filter">filter:</label>
        <select  id="filter" value={filter} onChange={(event) =>{
            setfilter(event.target.value)
        }}>
            <option value="show all"> show all</option>
            <option value="show completed"> show completed</option>
            <option value="show uncompleted"> show uncompleted</option>
            
             </select>
    </div>

}

function Todolist(){
    const filtertodo=useRecoilValue(filteredtodos)
    return <ul>
        {filtertodo.map((todo)=>(
            <li key={todo.id}>{todo.text}</li>
        )
        )}
    </ul>
}

//export default App;