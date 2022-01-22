import {Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, pendingTodo } from '../store/actions'
import { Total } from './Total'



export default function Todos() {
const [text,setText]=useState("")
const navigate = useNavigate();


const {loading,todos,error,total}=useSelector((state)=>({loading:state.loading,todos:state.todos,error:state.error,total:state.total}))

const dispatch = useDispatch()

useEffect(()=>{
  
getData()
},[])

async function getData(){
    try{
       
            dispatch(getTodoLoading())
            let res=await fetch('http://localhost:3001/todos')
            let data=await res.json()
            console.log(data)
            dispatch(getTodoSuccess(data))
        
    }catch(err){
        dispatch(getTodoError(err))
    }
    }

const addData=()=>{

    dispatch(addTodoLoading())


    fetch('http://localhost:3001/todos',{method:"POST",body:JSON.stringify({status:false,title:text})
    ,headers:{
        'Content-Type':'application/json'
    }}).then(d=>d.json()).then((res)=>{
        
    dispatch(addTodoSuccess(res))
    getData()
   
    }).catch((err)=>{
        console.log('e',err);
    dispatch(addTodoError(err))
    })
    
}
let count=0
const [c,setC]=useState(count)
useEffect(()=>{
    
    for(let i=0;i<todos.length;i++){
        if(!todos[i].status)
        count++
    }
    setC(count)
},[todos])

    return loading ? (<div>loading....</div>) : error ? (<div>something went wrong</div>): (
        <div>
    <input type="text" onChange={(e)=>setText(e.target.value)} value={text} placeholder='enter todo' />        

    <button onClick={()=>{
addData()
    }}> Add Todo</button>
    <div>
        {
            todos.map(e=>(
                <div onClick={()=>navigate(`/todo/${e.id}`)}>
                    <h1>{e.title} : {e.status==false?'not done':'done'}</h1>
                </div>
                
            ))
        }
    </div>
 <h1>pending tasks: {c}</h1>
        </div>
    )
}
