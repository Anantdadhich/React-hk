import { atomFamily } from "recoil"

const Todos=[{
    id:1,
    title:"gym",
    description:"work daily"
}
, {
    id:2,
    title:"study",
    description:"study daily"
}]
//atom family ways you to create the multiple dynamicaly to create the atoms
             
export const todofamily=atomFamily({
    key:"atomfamily",
    default: id=>{
        return Todos.find(x=>x.id ===id)
    },
})