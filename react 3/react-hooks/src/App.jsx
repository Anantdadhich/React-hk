import { memo, useEffect, useState } from 'react'


function App() {
 /*
  return (  //we also use frgament here <Fragment>
    <div>     
     <Header title="dfefe1"></Header>
     <Header title="sdefee2"></Header>
    </div>
  )
}  */

 /*const [firstttile,settitle]=useState('my name is asasas');
function udpatetitle(){
  settitle("my name is"+Math.random());
}
return ( 
  <div><button onClick={udpatetitle}>update</button>
    <Header title={firstttile}></Header>
     <Header title="rman"></Header>
  </div>
)
} */
   return(
   <div><Headerwithbutton></Headerwithbutton>
   <Header title="adadada"></Header>
   <Header title="addfrgrg"></Header>
   <Header title="adadvfrvfrv"></Header>
   </div>
   )
}
function Headerwithbutton(){
  const [firstttile,settitle]=useState('my name is asasas');
  let randomstring;    //declare the outside render

  useEffect(()=>{
    randomstring=Math.random().toString(36).slice(2,7);
  },[])  //empty dependency array to run only once

function udpatetitle(){
  settitle(`my name is ${randomstring}`);
}
return  <div>
    <button onClick={udpatetitle}>update</button>
    <Header title={firstttile}></Header>
    </div>

}

const memorizedheader=memo(Header);

function Header({title}){
return <div>
   {title}
</div>
} 

//export default App;
