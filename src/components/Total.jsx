import { useSelector,useDispatch } from 'react-redux'
import { pendingTodo } from '../store/actions'

export const Total=()=>{

const {todos,total}=useSelector((state)=>({todos:state.todos,total:state.total}))
let count=0
for(let i=0;i<todos.length;i++){
    if(!todos[i].status)
    count++
}

useDispatch(pendingTodo(count))


    return <h1>pending task {total}</h1>
}