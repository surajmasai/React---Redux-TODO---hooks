import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS,
    GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS,
    PENDING_TODO,
    REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS,
    EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS,
    TOGGLE_TODO_ERROR,TOGGLE_TODO_LOADING,TOGGLE_TODO_SUCCESS,
 } from "./actionTypes";

const init={loading:false,todos:[],error:false,total:0}

export const reducer=(state=init,{type,payload})=>{

    switch(type){
        // case ADD_TODO: return{
        //     ...state,
        //     todos:[...state,payload],
        // }

        case ADD_TODO_LOADING: return{
            ...state,
            loading:true
        }

        case ADD_TODO_SUCCESS: return{
            ...state,
            todos:[...state.todos,payload],
            loading:false
        }

        case ADD_TODO_ERROR: return {
            ...state,
            error:true,
            loading:false
        }

        case GET_TODO_LOADING: return{
            ...state,
            loading:true
        }

        case GET_TODO_SUCCESS: return{
            ...state,
            todos:payload,
            loading:false
        }

        case GET_TODO_ERROR: return {
            ...state,
            error:true,
            loading:false
        }

        case REMOVE_TODO_LOADING: return{
            ...state,
            loading:true
        }

        case REMOVE_TODO_SUCCESS: return{
            ...state,
            todos:state.todos.filter((el)=>{
                if(el.id!==payload.id){
                    return el
                }
            }),
            loading:false
        }

        case REMOVE_TODO_ERROR: return {
            ...state,
            error:true,
            loading:false
        }


        case TOGGLE_TODO_LOADING: return{
            ...state,
            loading:true
        }

        case TOGGLE_TODO_SUCCESS: return{
            ...state,
            todos:state.todos.map(el=>el.id==payload.id ? payload : el),
            loading:false
        }

        case TOGGLE_TODO_ERROR: return {
            ...state,
            error:true,
            loading:false
        }

        case PENDING_TODO: return {
            ...state,
           total:payload
            
        }


        case EDIT_TODO_LOADING: return{
            ...state,
            loading:true
        }

        case EDIT_TODO_SUCCESS: return{
            ...state,
            todos:state.todos.map(el=>el.id==payload.id ? payload : el),
            loading:false
        }

        case EDIT_TODO_ERROR: return {
            ...state,
            error:true,
            loading:false
        }


        default:
            return state
    }
}