import { useState } from "react";

function Logout({ setIsLoggedIn }) {

  return (
    <button onClick={()=> setIsLoggedIn(false)}>로그아웃</button>
  )

}

export default Logout;