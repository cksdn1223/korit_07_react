import { useState } from "react";

function MyForm4() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    alert(`Hello, ${firstName} ${lastName}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> <br />
      <label>Last Name : </label>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/> <br />
      <label>Email : </label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
      <input type="submit" />
    </form>
  );
}

export default MyForm4;