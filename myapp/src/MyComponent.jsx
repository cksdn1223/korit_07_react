import {useState} from 'react';

function MyComponent() {
  const [firstName, setFirstName] = useState('일');
  return (
    <>
      <h1>
        Hello {firstName}
      </h1>
      {/* <button onClick={()=>setName('이')}></button> */}
    </>
  );
}

export default MyComponent;