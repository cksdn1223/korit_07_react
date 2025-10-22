import axios from "axios";
import { User } from "../Types";

export const loginUser = async (user: User)=> {
  console.log(`유저 로그인 시도 : ${user.username} ${user.password}`)
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, user, {
    headers:{'Content-Type':'application/json'}
  });
  return response.data;
}

