import { useState } from "react";

function MyForm3() {

  const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: ''
  });

  const handleSubmit = (event) => {
    alert(`Hello, ${user.firstName} ${user.lastName}`);
    event.preventDefault();
    setUser({
      firstName: '',
      lastName: '',
      email: ''
    })
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input type="text" value={user.firstName} name="firstName" onChange={handleChange}/> <br />
      <label>Last Name : </label>
      <input type="text" value={user.lastName} name="lastName" onChange={handleChange}/> <br />
      <label>Email : </label>
      <input type="text" value={user.email} name="email" onChange={handleChange}/> <br />
      <input type="submit" />
    </form>
    
  );
}

export default MyForm3;