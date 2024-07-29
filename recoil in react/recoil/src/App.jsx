
import { countatom, evenselector } from "./atoms/count"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

function App() {

 
 //wrap anyone that wants to be use teleported value inside a provider
 return <div>
<RecoilRoot>
    <Count></Count>
</RecoilRoot>

 </div>

}
function Count(){
  return  <><Countrender > </Countrender>
    <Button>   </Button></>
}


function Countrender(){
   const count=useRecoilValue(countatom)//to read the value of a state of an atom
  return <div>
       <b>{count}</b> 
       <Evencount></Evencount>
    </div>
}
function Evencount(){
    const iseven=useRecoilValue(evenselector)
return(
    <div>
        {iseven ?"it is not even":null}
    </div>
)

}


function Button(){
   const setcount=useSetRecoilState(countatom)
   console.log("the buttons re render ")
   return <div>
        <button onClick={()=>{
        setcount(count =>count+1)
        }}>increase</button>
           <button onClick={()=>{
           setcount(count => count -1) 
        }}>decrease</button>
    </div>
}

//export default App;