import { atomFamily,selectorFamily } from "recoil";
import axios from "axios";

export const todofamily=atomFamily({
    key:"atomfamily",
    default:selectorFamily({
        key:"slectorfamily",
        get:function(id){
            async ({get}) =>{
                await new Promise(r=> setTimeout(r,5000))
                const res =await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
                return res.data.todo;
            }
        }
    })
})