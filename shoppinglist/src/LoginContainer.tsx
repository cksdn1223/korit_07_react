import { Button, TextField } from '@mui/material'
import './practice.css'
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import App from './App';

type User = {
  username: string;
  password: string;
}

function LoginContainer() {
  useEffect(() => {
    if(localStorage.getItem('jwt') !== null) setAuth(true)
    else setAuth(false)
  }, [])
  const [ user, setUser ] = useState<User>({
    username: '',
    password: ''
  })
  const [ auth, setAuth ] = useState(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleLogin = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/login`, user, {
      headers: {'Content-Type':'application/json'}
    })
    .then(res => {
      const jwtToken = res.headers.authorization;
      if(jwtToken !== null) localStorage.setItem('jwt', jwtToken);
      setAuth(true);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return auth ? <App setAuth={setAuth}/> : (
    <div className='login-container'>
      <TextField className='input-id' name='username' value={user.username} onChange={handleChange} type="text" label="ID" variant="outlined"/>
      <TextField className='input-pw' name='password' value={user.password} onChange={handleChange} type="password" label="PW" variant="outlined"/>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleLogin}
        style={{fontWeight:'bold'}}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginContainer;