import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
export const Singletodo=()=>{
    const id=useParams().id
    const [todos,setTodo]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
       getData()
    },[])

    const getData=async()=>{
        let res=await fetch(`http://localhost:8080/todos/${id}`)
        let data=await res.json()
       setTodo(data)
    }

    const updateTodo=async()=>{
        let res=await fetch(`http://localhost:8080/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
               
                status:true
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        getData()
    }

    const removeTodo=async()=>{
        let res=await fetch(`http://localhost:8080/todos/${id}`,{
            method:"DELETE",
           
            headers: { 'Content-Type': 'application/json' }
        })
       return navigate(-1,{replace:true})
    }

    
    return <div>
        <h1>{todos.todo}</h1>
        <h3>Status:{todos.status===false ? "Not-Completed":"Completed"}</h3>
        <button onClick={()=>updateTodo()}>Completed</button>
        <button onClick={()=>removeTodo()}>Remove</button>
    </div>
}