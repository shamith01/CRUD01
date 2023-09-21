import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { BsTrash} from "react-icons/bs";
import { baseURL } from '@/utils/Constant';
import axios from 'axios';


const List = ({id,task,setUpdateUI,updateMode}) => {
  
  const removeTask=()=>{
    axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
      console.log(res);
      setUpdateUI((prevState)=>!prevState);
    })
  }

  return (
    <li className='flex w-[360px] min-h-[50px] justify-between mx-auto p-3 bg-red-300 my-3 '>
        <h2 className='text-xl font-bold'>
          {task}
          </h2>
        <div className='flex gap-5'>
            <BiEditAlt  className='cursor-pointer text-2xl font-bold  ' onClick={()=>updateMode(id,task)} />
            <BsTrash  className='cursor-pointer text-2xl font-bold ' onClick={removeTask}/>
        </div>
      
    </li>
  )
}

export default List
