

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsatom, messagingatom, networkatom, notifiactionsatom, totalcount } from "./atoms/page"

function Mainpage()
{     //  always wrap the component inside the component recoil root because it does not access it 
    return <div>
        <RecoilRoot>
            <Page></Page>  
        </RecoilRoot>
    </div>
}
function Page(){
const networkcount=useRecoilValue(networkatom)
const jobscount=useRecoilValue(jobsatom)
const [messagingcount,setmeesgaecount]=useRecoilState(messagingatom)
const notificationscount=useRecoilValue(notifiactionsatom)
const totalnotcount=useRecoilValue(totalcount)
    return <div>
        <button >home</button>
          <button >my network({networkcount >=100 ? "99+" :networkcount})</button>
            <button >messgaing({messagingcount})</button>
              <button >jobs({jobscount})</button>
                <button >notifiactions({notificationscount})</button>
                  <button onClick={()=>
                  setmeesgaecount(messagingcount+1)}>me {totalnotcount} </button>
    </div>
}
//export default Mainpage;