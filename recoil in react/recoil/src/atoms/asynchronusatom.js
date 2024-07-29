import {atom, selector} from 'recoil'

export const notifiactions=atom({
    key:"notification",
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
}); 

export const notifiactionsselector=selector({
    key:"notifiactionsselecto",
    get:({get})=>{
        const allnotifiavtion=get(notifiactions)
        return allnotifiavtion.network+
        allnotifiavtion.jobs+
        allnotifiavtion.messaging+
        allnotifiavtion.notifiactionss
    }
})