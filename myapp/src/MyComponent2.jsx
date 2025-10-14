import { useState } from "react";

function MyComponent2() {
  const [ name, setName ] = useState({
    firstName : 'John',
    lastName : 'Doe'
  });

  return (
    <>
      <h2>Hello {name.firstName} {name.lastName}</h2>
      <button onClick={()=>{
        if(name.lastName === 'Doe') setName({ ...name, lastName: '도' });
        else setName({ ...name, lastName: '' });
      }}></button>
    </>
  )
}

export default MyComponent2;