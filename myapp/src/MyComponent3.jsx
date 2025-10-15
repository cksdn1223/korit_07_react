import { useState } from 'react';

function MyComponent3() {
  const [ count, setCount ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount2(count2 + 1)
  }

  return (
    <>
      <p> 현재 값 : {count} ⭐ {count2} </p>
      <button onClick={increment}> 증가 </button>
    </>
  );
}

export default MyComponent3;