import { useEffect } from "react";

function useKeyEffect(ref) {
  useEffect(()=>{
    const handleKeyDown = (e) => {
      if (e.key === ref.current.innerHTML) {
        ref.current.style.backgroundColor = 'black';
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === ref.current.innerHTML) {
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