
import { ADD_TODO,

    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,

    REMOVE_TODO_ERROR,
    REMOVE_TODO_LOADING,
    REMOVE_TODO_SUCCESS,

    TOGGLE_TODO_ERROR,
    TOGGLE_TODO_LOADING,
    TOGGLE_TODO_SUCCESS,

    EDIT_TODO_ERROR,
    EDIT_TODO_LOADING,
    EDIT_TODO_SUCCESS,

    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,

    PENDING_TODO,
    REMOVE_TODO } from "./actionTypes"

export const addTodo=(data)=>({
    type:ADD_TODO,
    payload:data
})

export const addTodoLoading=()=>{
    return {
        type:ADD_TODO_LOADING,
    };
}


export const addTodoSuccess=(res)=>{
    return {
        type:ADD_TODO_SUCCESS,
        payload:res,
    };
}

export const addTodoError=(err)=>{
    return {
        type:ADD_TODO_ERROR,
        payload:err,
    };
}

export const removeTodoLoading=()=>{
    return {
        type:REMOVE_TODO_LOADING,
    };
}


export const removeTodoSuccess=(res)=>{
    return {
        type:REMOVE_TODO_SUCCESS,
        payload:res,
    };
}

export const removeTodoError=(err)=>{
    return {
        type:REMOVE_TODO_ERROR,
        payload:err,
    };
}


export const toggleTodoLoading=()=>{
    return {
        type:TOGGLE_TODO_LOADING,
    };
}


export const toggleTodoSuccess=(res)=>{
    
    return {
        type:TOGGLE_TODO_SUCCESS,
        payload:res,
    };
}

export const toggleTodoError=(err)=>{
    return {
        type:TOGGLE_TODO_ERROR,
        payload:err,
    };
}



export const getTodoLoading=()=>{
    return {
        type:GET_TODO_LOADING,
    };
}


export const getTodoSuccess=(res)=>{
    return {
        type:GET_TODO_SUCCESS,
        payload:res,
    };
}

export const getTodoError=(err)=>{
    return {
        type:GET_TODO_ERROR,
        payload:err,
    };
}

export const pendingTodo=(payload)=>{
    console.log('pending',payload);
    return {
        type:PENDING_TODO,
        payload
    };
}

export const removeTodo=(id)=>({
    type:REMOVE_TODO,
    payload:id,
})


export const editTodoLoading=()=>{
    return {
        type:EDIT_TODO_LOADING,
    };
}


export const editTodoSuccess=(res)=>{
    return {
        type:EDIT_TODO_SUCCESS,
        payload:res,
    };
}

export const editTodoError=(err)=>{
    return {
        type:EDIT_TODO_ERROR,
        payload:err,
    };
}