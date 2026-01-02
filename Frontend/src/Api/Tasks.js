import api from './Axios'

export const gettasks = () => {
  return api.get('/api/tasks')
}

export const createtask = (task) => {
  return api.post('/api/tasks', task)
}

export const deletetask = (task) => {

  const id = task
  return api.delete(`/api/tasks/${id}`)
}

export const updatetask = (id, updates) => {
  return api.patch(`/api/tasks/${id}`, updates)
}