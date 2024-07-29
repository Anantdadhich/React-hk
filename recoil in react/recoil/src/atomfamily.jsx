//create a component that takes todo as todoid as input it renders the todo
//how would you create todos and todos the dynamically
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
import { todofamily } from './atoms/todoatomfamily'
import { useEffect } from 'react';

function App(){
    return <div>
        <RecoilRoot>
          <Update></Update>
            <Todo id={1}></Todo>
                   <Todo id={2}></Todo>
        </RecoilRoot>
    </div>
}
function Update() {
  const [updatedTodo, setUpdatedTodo] = useRecoilState(todofamily(2));

  useEffect(() => {
    setTimeout(() => {
      setUpdatedTodo({
        title: "heloo",
        description: "ji kasa ho"
      });
    }, 4000);
  }, [setUpdatedTodo]); // Add setUpdatedTodo as a dependency

  return <div></div>;
}



function Todo({id}){
  const current=useRecoilValue(todofamily(id));

  return <div>
    {current.title}
    {current.description}
    <br />
  </div>
}

//export default App