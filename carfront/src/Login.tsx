import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Button, TextField, Stack, Snackbar } from "@mui/material"
import Carlist from "./components/Carlist";


type User = {
  username: string;
  password: string;
}

function Login() {
  const [ isAuthenticated, setAuth ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ user, setUser ] = useState<User>({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleLogin = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/login`, user, {
      headers: {'Content-Type':'application/json'}
    })
    .then(res => {
      const jwtToken = res.headers.authorization;
      if(jwtToken !== null) sessionStorage.setItem('jwt', jwtToken);
      setAuth(true);
    })
    .catch(err =>{
      console.log(err);
      setOpen(true);
    })
    .finally(() => {
      setUser({
        username: '',
        password: '',
      })
    })
  }

  if(isAuthenticated) {
    return <Carlist />
  } else {
    return (
      <Stack spacing={2} alignItems='center' mt={2}>
        <TextField 
          name='username'
          label='Username'
          onChange={handleChange}
        />
        <TextField 
          type='password'
          name='password'
          label='Password'
          onChange={handleChange}
        />
        <Button
          variant='outlined'
          color='primary'
          onClick={handleLogin}
          style={{backgroundColor:'yellow',fontWeight:'bold'}}
        >
          Login
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message='ID 혹은 비밀번호가 틀렸습니다.'/>
      </Stack>
    )
  }

}

export default Login;