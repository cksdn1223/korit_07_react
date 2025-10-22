import { ChangeEvent, useContext, useState } from "react";
import axios from "axios";
import { Button, TextField, Stack } from "@mui/material"
import AuthContext from "./AuthContext";

type User = {
  username: string;
  password: string;
}

function Login() {
  const [ user, setUser ] = useState<User>({
    username: '',
    password: '',
  });
  const { isAuthenticated, setAuth } = useContext(AuthContext);
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
      console.log('JWT토큰 : ' + jwtToken.substring(7))
      setAuth(true);
    })
    .catch(err => console.log(err))
  }
  return (
    <>
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
        >
          Login
        </Button>
      </Stack>
    </>
  );
}

export default Login;