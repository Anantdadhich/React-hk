import {atom, selector} from "recoil";

 export const countatom=atom({
    key:"countatom",
    default:0
})
//A selector represents a piece of derived state.
export const evenselector=selector({
    key:"evenselector",
    get:({get})=>{
        const count=get(countatom);
        return count % 2
    }
})
//we add atom in our project 