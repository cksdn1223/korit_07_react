import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [ name, setName ] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`이름 ${name}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name}/>
        <input type="submit" value={'제출'}/>
      </form>
    </>
  )
}

export default App
