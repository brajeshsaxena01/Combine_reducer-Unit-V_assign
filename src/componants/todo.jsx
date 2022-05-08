import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import {addTodo} from "../redux/TODO/todoaction"
import { Link, useNavigate } from "react-router-dom"

export const Todo=()=>{
    
    const navigate=useNavigate()
    const [text,setText]=useState("")
    const todos=useSelector((store)=>store.todos)
    const Auth=useSelector((store)=>store.Loginstatus)
      console.log(Auth)
    const dispatch=useDispatch()

    useEffect(()=>{
       getData()
    },[])

    const getData=async()=>{
        let res=await fetch("http://localhost:8080/todos")
        let data=await res.json()
        dispatch(addTodo(data))
        
    }

    const setData=async()=>{
        if(Auth.LoginStatus===false){
            alert("Login required")
            return navigate("/login")
        }
        let res=await fetch("http://localhost:8080/todos",{
            method:"POST",
            body:JSON.stringify({
                todo:text,
                status:false
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        getData()
    }
  return <div>
      <form>
          <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Write Todo Here" />
          <input onClick={(e)=>{e.preventDefault(),setData(text)}} type="submit" value="ADD TODO"/>
      </form>
      <div>
        {todos.todos.map((e)=>{
            return <Link key={e.id} to={Auth.LoginStatus===false ? "/login":`/todo/${e.id}`}><div>{e.todo}</div></Link>
        })}
      </div>
  </div>
}