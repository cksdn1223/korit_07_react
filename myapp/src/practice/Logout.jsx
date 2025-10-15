function Logout({ setIsLoggedIn, saveId}) {

  return (
    <>
      <button onClick={()=> setIsLoggedIn(false)}>로그아웃</button>
      <p>{saveId}님 로그인중</p>
    </>
  )

}

export default Logout;