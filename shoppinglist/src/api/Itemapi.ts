import axios from "axios"
import { Item } from "../types"

const localhost = import.meta.env.VITE_API_URL


export const createItem = async (item: Item) => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다')
  const response = await axios.post(`${localhost}/api/item`, item, {
    headers: {
      Authorization: token
    }
  });
  return response.data;
}

export const getItems = async () => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다')
  const response = await axios.get(`${localhost}/api/items`, {
    headers: {
      Authorization: token
    }
  });
  return response.data;
}

export const updateItems = async (value) => {
  const token = localStorage.getItem('jwt')
  console.log(value)
  if (token === null) throw new Error('토큰이 없습니다')
  const response = await axios.patch(`${localhost}/api/item/${value.id}`, value.item, {
    headers: {
      Authorization: token
    }
  })
  return response.data;
}

export const deleteItems = async (id: string) => {
  const token = localStorage.getItem('jwt')
  if (token === null) throw new Error('토큰이 없습니다')
  await axios.delete(`${localhost}/api/item/${id}`, {
    headers: {
      Authorization: token
    }
  })
}