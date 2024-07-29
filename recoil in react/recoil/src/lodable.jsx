import {RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable} from 'recoil'
import { todofamily } from './atoms/lodable'


function App(){
    return <div>
        <RecoilRoot>
            <Todo id={1}></Todo>
                   <Todo id={2}></Todo>
        </RecoilRoot>
    </div>
}





function Todo({id}){
const [todo,settodo]=useRecoilValueLoadable(todofamily(id))

if(todo.state==="loading"){
    return <div>
        loading
    </div>
}

  return <div>
    {todo.contents.title}
    {todo.contents.description}
    <br />
  </div>
}

export default App