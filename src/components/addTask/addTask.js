import React,{useState} from 'react'
import './addTask.css'

export default function AddTask(props) {
 const [task, settask] = useState("")

 const addTask=(e)=>{
  e.preventDefault()
     if(task.trimEnd()===""){
         return
     }
     settask("")
    props.addInAllTask(task);
 }
 

    return (
        <form className="addTask" onSubmit={
            (e)=> addTask(e)}>
            <input type="text" placeholder="Enter your task" value={task} onChange={(e)=>{settask(e.target.value)}}/>
            <button type="submit">Add</button>
        </form>
    )
}
