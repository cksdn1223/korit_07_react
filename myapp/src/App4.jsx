import './App.css'
import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  return (
    <>
      <input ref={inputRef}/>
      <br/>
      <br/>
      <button onClick={()=>inputRef.current.focus()}>강제 포커스 활성화</button> <br />
      <button onClick={()=>inputRef.current.disabled=!inputRef.current.disabled}>활성화 비활성화 토글</button> <br />
      <button ref={buttonRef} onClick={()=>{
        if(buttonRef.current.style.backgroundColor!='red') buttonRef.current.style.backgroundColor='red'
        else buttonRef.current.style.backgroundColor='yellow'
      }}>색변경</button>
    </>
  );
}

export default App