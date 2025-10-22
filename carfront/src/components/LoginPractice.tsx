import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { User } from "../Types";
import { loginUser } from "../api/useapi";
import { useMutation } from "@tanstack/react-query";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
function Login() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ user, setUser ] = useState<User>({
    username: '',
    password: '',
  });
  const [ open, setOpen ] = useState(false);
  const [ see, setSee ] = useState(false);
  const handleClickClose = () => {
    setOpen(false);
    setUser({
      username: '',
      password: '',
    });
  };

  const { mutate } = useMutation(loginUser, {
    onSuccess: () => {
      setIsLogin(true);
      console.log(`${user.username} 님 로그인 성공`)
      handleClickClose();
      localStorage.setItem('username', user.username);
    },
    onError: err => console.log(err)
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return isLogin ? (
    <>
      <Button variant="outlined" onClick={() => setIsLogin(false)}>LogOut</Button>
      <span>{localStorage.getItem('username')}님 로그인중</span>
    </>
  ) : 
  (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>LogIn</Button>
      <Dialog open={open}>
        <DialogTitle>LogIn</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Id" name="username" value={user.username} onChange={handleChange} />
            <TextField type={see ? "text" : "password"} label="Pw" name="password" value={user.password} onChange={handleChange} />
            <IconButton onClick={() => setSee(!see)}>
              <VisibilityRoundedIcon />
            </IconButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>mutate(user)}>Login | 로그인</Button>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Login;