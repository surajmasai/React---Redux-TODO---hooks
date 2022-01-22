import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { editTodoError, editTodoLoading, editTodoSuccess, removeTodoError, removeTodoLoading, removeTodoSuccess, toggleTodoError, toggleTodoLoading, toggleTodoSuccess } from "../store/actions"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import './TodoDetails.css'

export const TodoDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { todos } = useSelector((state) => ({ todos: state.todos }))
    const dispatch = useDispatch()


    let x = todos.filter((el) => {
        if (el.id == id)
            return el
    })

    const handleToggle = () => {
        async function updateProduct() {
            try {
                dispatch(toggleTodoLoading())
                let data = {
                    id: id,
                    title: x[0].title,
                    status: !x[0].status,
                }
                let res = await fetch(`http://localhost:3001/todos/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                let d = await res.json()
                dispatch(toggleTodoSuccess(d))
                console.log(d)
                // navigate(`/todo/${id}`)
            } catch (err) {
                dispatch(toggleTodoError(err))
            }



        }
        updateProduct()
    }

    const handleRomove = () => {
        async function deleteTodo() {

            try {
                dispatch(removeTodoLoading())
                let res = await fetch(`http://localhost:3001/todos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                let data = res.json()
                dispatch(removeTodoSuccess(data))
                navigate("/")

            } catch (e) {
                dispatch(removeTodoError(e))
            }



        }
        deleteTodo()
    }

    const [newTitle, setNewTitle] = useState('')




    const handleEdit = () => {

        let payload = { ...x[0], title: newTitle }
        console.log('payload', payload)

        async function editTodo() {

            try {
                dispatch(editTodoLoading())
                let res = await fetch(`http://localhost:3001/todos/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                let data = res.json()
                dispatch(editTodoSuccess(data))
                navigate("/")

            } catch (e) {
                dispatch(editTodoError(e))
            }



        }
        editTodo()
    }


    return <div>


        <p>{x[0].title} : {x[0].status == false ? 'not done' : 'done'}</p>
        <div>

            Edit: <input type="text" placeholder="edit your task" onChange={(e) => setNewTitle(e.target.value)} id="heading" />
        </div>
        <div id="btn">
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleRomove}>Remove</button>
            <button onClick={handleToggle}>Done</button>

        </div>

    </div>
}