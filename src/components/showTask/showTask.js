import React from 'react'
import './showTask.css'

export default function ShowTask(props) {

    const removeTask =(index)=>{
props.remove(index)
    }

    const completeTask = (index)=>{
        props.isComplete(index)
    }

    return (
        <div className="showTask">
           {props.allTask.map((x,index)=>(
             <div className={x.isComplete?"task complete":"task"}
             onClick={()=>completeTask(index)}
             onDoubleClick={()=>removeTask(index)} key={index}>
                 {x.task}
             </div>  
           ))}
           <p>by <br /> Ganesh Paulraja</p>
        </div>
    )
}
