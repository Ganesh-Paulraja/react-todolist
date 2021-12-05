import React from 'react'
import { useState } from 'react';

//components
import AddTask from './components/addTask/addTask';
import ShowTask from './components/showTask/showTask';

function App() {
const [allTask, setallTask] = useState([])

const addInAllTask = (task)=>{
  const newTask = {
    task : task,
    isComplete: false
  }
const taskList = [...allTask,newTask]
setallTask(taskList)
console.log(allTask)
}

const complete =(index)=>{
  const taskList =[...allTask]
 if( taskList[index].isComplete){
   taskList[index].isComplete=false
 }
 else{
   taskList[index].isComplete= true
 }
 setallTask(taskList)
}

const remove=(index)=>{
  const taskList = [...allTask]
  taskList.splice(index,1)
  setallTask(taskList)
}
var appstyle={"textAlign": "center",
               "marginTop": "10px"}

  return (
    <div className="App">
      <h1 style={appstyle}>Reactjs Tdo app</h1>
      <h2 style={appstyle}>one click to cut and uncut</h2>
      <h2 style={appstyle}>two click to remove</h2>
     <AddTask addInAllTask={addInAllTask}/>
     <ShowTask allTask={allTask} remove={remove} isComplete={complete}/>
    </div>
  );
}

export default App;
