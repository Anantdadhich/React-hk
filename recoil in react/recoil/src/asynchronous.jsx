import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { useEffect } from "react"
import axios from 'axios'
import { notifiactions,  notifiactionsselector } from "./atoms/asynchronusatom"




function Mainpage()
{     //  always wrap the component inside the component recoil root because it does not access it 
    return <div>
        <RecoilRoot>
            <Page></Page>  
        </RecoilRoot>
    </div>
}
function Page(){
const [networkcount,setnetworkcount]=useRecoilState(notifiactions)
const totalnotcount=useRecoilValue(notifiactionsselector)
     
useEffect(()=>{
    axios.get("https")
    .then(res=>{
        setnetworkcount(res.data)
    })
},[])


    return <div>
        <button >home</button>
          <button >my network({networkcount.network >=100 ? "99+" :networkcount})</button>
            <button >messgaing({networkcount.messaging})</button>
              <button >jobs({networkcount.jobs})</button>
              <button>notifiactions{networkcount.notifications}</button>
               <button>me{totalnotcount}</button>
    </div>
}
export default Mainpage;