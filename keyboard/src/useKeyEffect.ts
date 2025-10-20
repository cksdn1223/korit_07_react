import { MutableRefObject, useContext, useEffect } from "react";
import StrContext from "./StrContext";

function useKeyEffect(ref: MutableRefObject<HTMLButtonElement | null>) {
  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if (ref.current && e.key.toUpperCase() === ref.current.innerHTML.toUpperCase()) {
        ref.current.style.backgroundColor = 'black';
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (ref.current && e.key.toUpperCase() === ref.current.innerHTML.toUpperCase()) {
        ref.current.style.backgroundColor = 'gray';
      }
    }
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [ref]);
}

export default useKeyEffect;