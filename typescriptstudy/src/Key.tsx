import { useRef } from 'react'
import useKeyEffect from './useKeyEffect.ts'
function Key({alp}: {alp:string}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useKeyEffect(buttonRef);
  return (
    <>
      <button ref={buttonRef} style={{backgroundColor:'gray',padding:'10px 15px'}}>{alp}</button>
    </>
  );
}

export default Key;