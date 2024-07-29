import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Suspense, lazy } from 'react';
const Dashboard=  lazy(() => import('./pages/landing')) ;
const Landing= lazy(()=> import('./pages/dashboard'));
//suspence api is use to asynchronous fetching data
function App(){
 
  return <div>
   
   <BrowserRouter>
   <Appbar />
   <Routes>
    <Route path='/dashboard' element={<Suspense fallback={"loading.."}><Dashboard></Dashboard></Suspense>} ></Route>
     <Route path='/' element={<Suspense fallback={"loading.."}><Landing></Landing></Suspense>} ></Route>
   </Routes>
   </BrowserRouter>
  </div>
}
function Appbar(){
 const navigate=useNavigate();  //always use usenavigate in component 
 return <div >
      <button onClick={()=>{
       navigate("/");
      }}>land</button >
      <button onClick={()=>{
    navigate("/dashboard") }}>
       Dashboard
      </button>
    </div>
}

//export default App
