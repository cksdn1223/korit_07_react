import { MutableRefObject, useEffect } from "react";

function useKeyEffect(ref: MutableRefObject<HTMLButtonElement | null>) {
  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if (ref.current && e.key === ref.current.innerHTML) {
        ref.current.style.backgroundColor = 'black';
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (ref.current && e.key === ref.current.innerHTML) {
        ref.current.style.backgroundColor = 'gray';
      }
    }
    document.removeEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    }
  }, [ref]);
}

export default useKeyEffect;