import {atom,selector} from 'recoil'

 export const todoliststate=atom({
    key:"todoliststate",
    default:[]
})
 export const todolistfilterstate=atom({
    key:"todolistfilterstate",
    default:[]
})


export const filteredtodos=selector({
    key:"filteredtodos",
    get:(props)=>{
     const list=props.get(todoliststate);
     const filter=props.get(todolistfilterstate);
       
     switch(filter){
        case 'show completed':
            return list.filter((todo)=>todo.iscomplete);
            case 'show uncompleted':
          return list.filter((todo) => !todo.iscomplete);
          default :
          return list ;
     }
    }
})
