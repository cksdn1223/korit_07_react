import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import '../practice.css'
import { ChangeEvent, useState } from "react";
import { deleteCompleted, saveTodo, updateTodo } from "../apis/todoapis";
import { Button, TextField } from "@mui/material";
import { jwtDecode } from 'jwt-decode';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

export type Todo = {
  id: number,
  content: string,
  isCompleted: boolean
}

function Todolist() {
  const [username, setUsername] = useState('');
  const getTodos = async () => {
    const token = localStorage.getItem('jwt')
    if (token == null) throw new Error('토큰이 없습니다.')
    setUsername(jwtDecode(token).sub)
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/todos`, {
      headers: {
        'Authorization': token
      }
    })
    return response.data
  }
  const [inputContent, setInputContent] = useState({
    content: ''
  });
  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent({
      content: e.target.value
    });
  }
  const queryClient = useQueryClient();
  const handleDelete = async () => {
    await deleteCompleted();
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  }
  const handleUpdate = async (id: number) => {
    await updateTodo(id);
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  }
  const { mutate } = useMutation(saveTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: err => console.log(err)
  })
  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos
  })

  if (isLoading) {
    return <CircularProgress />
  }
  if (!isSuccess) {
    return <span>
      Todo를 불러오는 데 실패했습니다. <br />
      {error instanceof Error ? error.message : "?Error"}
    </span>
  }
  else {
    return (
      <div className='todolist'>
        <h1 className='title'>{username}님의 Todos</h1>
        <div className="search-container">
          <TextField className='input-todo' value={inputContent.content} onChange={handleAddTodo} placeholder='할 일을 작성하세요' label='Todo' />
          <Button onClick={() => mutate(inputContent)}>추가</Button>
          <Button onClick={() => handleDelete()}>제거</Button>
        </div>
        <div className='todo-container'>
          {data.map((todo: Todo) =>
            <div className="todo" style={{ backgroundColor: todo.isCompleted ? 'gray' : 'white' }} key={todo.id}>
              <span style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                color: todo.isCompleted ? '#999' : 'inherit'
              }}>{todo.content}</span>
              <span>
                <Checkbox checked={todo.isCompleted} onChange={() => handleUpdate(todo.id)} />
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Todolist;