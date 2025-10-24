import axios from "axios"
const localhost = import.meta.env.VITE_API_URL


// post api/todos/save
export const saveTodo = async (todo: { content: string }) => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다.')
  const response = await axios.post(`${localhost}/api/todos/save`, todo, {
    headers: {
      'Authorization': token
    }
  })
  return response.status
}

// delete api/todos/completed
export const deleteCompleted = async () => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다.')
  const response = await axios.delete(`${localhost}/api/todos/completed`, {
    headers: {
      'Authorization': token
    }
  })
  return response.status
}

// patch api/todos/5
export const updateTodo = async (id: number) => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다.')
  const response = await axios.patch(`${localhost}/api/todos/${id}`, {}, {
    headers: {
      'Authorization': token
    }
  })
  return response.status
}