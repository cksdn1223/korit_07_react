import './App.css'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [saveId, setSaveId] = useState('');
  return isLoggedIn ? (<><Logout setIsLoggedIn={setIsLoggedIn} saveId={saveId}/></>) : (<><Login setIsLoggedIn={setIsLoggedIn} setSaveId={setSaveId}/></>);
}

export default App