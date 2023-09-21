"use client";
import List from '@/components/List';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {baseURL} from '../utils/Constant'

const page = () => {

  const [input,setInput]=useState("");
  const [tasks,setTasks]=useState([]);
  const [updateUI,setUpdateUI]=useState(false);
  const [updateId,setUpdateId]=useState(null);

  useEffect(()=>{
    axios.get(`${baseURL}/get`).then((res)=>{
      console.log(res.data)
      setTasks(res.data)
    });
  },[updateUI]);

  const addTask=()=>{
    axios.post(`${baseURL}/save`,{task:input}).then((res)=>{
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState)=>!prevState);
    });
  };


  const updateMode=(id,text)=>{
    console.log(text);
    setInput(text)
    setUpdateId(id)

  }
  const updateTask=()=>{
    axios.put(`${baseURL}/update/${updateId}`,{task:input}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState)=>!prevState);
      setUpdateId(null);
      setInput("");
    })
  }


  return (
    <div className='w-[400px] mx-auto bg-blue-300 p-2  m-6 rounded-md'>
      <h1 className="text-center font-bold text-2xl bg-slate-200 mt-5 my-2 mx-auto w-max p-2">CRUD OPERATIONS</h1>
    
     <div className='mx-auto mb-4'>

      <div className='mx-2 '>
        <input 
        className='p-2'
        type="text"
        value={input} 
        onChange={(e)=>setInput(e.target.value)}
        />
         <button type='submit' onClick={updateId? updateTask:addTask} 
         className=' hover:bg-white hover:border-3 hover:border-black bg-green-400 p-2 m-2 font-semibold text-lg'
         >{updateId?"Update Task":" Add Task"} </button>
      </div>
      <ul >
        {tasks.map((task)=>(
          <List 
          key={task._id} 
          id={task._id} 
          task={task.task} 
          setUpdateUI={setUpdateUI}
          updateMode={updateMode}
          />
        ))}
      </ul>
        </div>
    </div>
  )
}

export default page
