import useSwr from 'swr'


const response =(url )=>{
    fetch(url)
    .then((res)=>{
        res.json()
    })
}

function Todos (){
      const {data,iserror,loading}=useSwr('https://sum-server.100xdevs.com/todos',response)

      if(iserror){
        <div>no load</div>

    }
    if(loading){
        <div>loading......</div>
    }
    return <div>
        hell {data.todos.length}
    </div>
}

export default Todos