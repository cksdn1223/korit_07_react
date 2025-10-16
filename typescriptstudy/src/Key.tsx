import { useEffect, useRef } from 'react'
import useKeyEffect from './useKeyEffect.ts'
function Key({alp}) {
  const buttonRef = useRef(null);
  useKeyEffect(buttonRef);
  return (
    <>
      <button ref={buttonRef} style={{backgroundColor:'gray',padding:'10px 15px'}}>{alp}</button>
    </>
  );
}

export default Key;