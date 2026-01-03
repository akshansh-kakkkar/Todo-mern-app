import React, { useEffect, useState } from 'react'

const TaskForm = ({addtask}) => {
  const [title, settitle] = useState('')
    const handlesubmit = (e)=>{
      e.preventDefault()
      addtask(title)
      settitle('')

    }
  return (
    <form onSubmit={handlesubmit} className='flex justify-center p-5 m-5'>
        <input type="text" onChange={(e)=>settitle(e.target.value)} value={title} className='bg-orange-100 w-2/4 p-2 outline-none px-5 rounded-l-2xl text-[#431407] text-2xl placeholder:text-[#431407] font-semibold' required placeholder='enter a task'/>
        <button type='submit'className='bg-orange-400 px-7 font-bold text-2xl rounded-r-2xl'>Add</button>
    </form>
  )
}

export default TaskForm