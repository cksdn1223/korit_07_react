import { useState } from "react";

function Login({ setIsLoggedIn, setSaveId }){
  // 입력 필드를 위한 상태
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = inputs; // 구조 분해 할당으로 값 추출

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const login = () => {
    setInputs({ id: '', pw: '' }); // 입력 필드 초기화
    alert(`${id}님 환영합니다!`);
    setIsLoggedIn(true);
    setSaveId(id);
  };

  return (
    <form className="lg-container">
      <input name="id" type="text" placeholder="ID를 입력하세요." value={id} onChange={handleInputChange}/>
      <input name="pw" type="password" placeholder="PW를 입력하세요." value={pw} onChange={handleInputChange}/>
      <button onClick={login}>로그인</button>
    </form>
  );
}

export default Login;