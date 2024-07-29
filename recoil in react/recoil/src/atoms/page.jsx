import {atom, selector} from "recoil"

export const networkatom=atom({
    key:"networkatom",
    default:104
})

export const jobsatom=atom({
    key:"jobsatom",
    default:0
})
export const messagingatom=atom({
    key:"messagingatom",
    default:0
})

export const notifiactionsatom=atom({
    key:"notificationatom",
    default:12
})
//selector can be derived from other atoms 

export const totalcount=selector({
    key:"totlacount",
    get:({get})=>{
     const networkcount=get(networkatom)
     const jobscount=get(jobsatom)
     const messagingcount=get(messagingatom)
     const notificatrioncount=get(notifiactionsatom)

     return networkcount+jobscount+messagingcount+notificatrioncount;
    }
})