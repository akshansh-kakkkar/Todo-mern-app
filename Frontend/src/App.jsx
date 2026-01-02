import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Table from './components/Table'
import TaskForm from './components/TaskForm'
import { gettasks, createtask, deletetask, updatetask } from './Api/Tasks'

function App() {
  const [search, setSearch] = useState("");
  const [tasks, settasks] = useState([])
  useEffect(() => {

    gettasks()
      .then((res) => {
        settasks(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const addtask = async (title) => {
    try {
      const res = await createtask({ title })
      settasks(prev => [res.data, ...prev])
    }
    catch (error) {
      console.log(error)
    }
  };
  const handledelete = async (id) => {
    try {
      await deletetask(id);
      settasks(prev => prev.filter(task => task._id !== id))
    }
    catch {
      console.log("error")
    }
  }
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handletoggle = async (id, isDone) => {
    try {
      const res = await updatetask(id, { isDone })
      // backend returns { task, message }
      const updated = res.data.task || res.data
      settasks(prev => prev.map(t => (t._id === id ? updated : t)))
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (id, title) => {
    try {
      const res = await updatetask(id, { title })
      const updated = res.data.task || res.data
      settasks(prev => prev.map(t => (t._id === id ? updated : t)))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Navbar setSearch={setSearch} />
      <TaskForm addtask={addtask} />
      <Table tasks={filteredTasks} ondelete={handledelete} onToggle={handletoggle} onEdit={handleEdit} />
    </>
  )
}

export default App
