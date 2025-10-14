import './App.css'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (<><Logout setIsLoggedIn={setIsLoggedIn}/></>) : (<><Login setIsLoggedIn={setIsLoggedIn} /></>);
}

export default App