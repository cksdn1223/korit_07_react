import './App.css'
import AuthContext from './AuthContext'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2';
import MyForm from './MyForm';
import MyTable from './MyTable'

function App() {
  const username = '김2';

  return (
    <AuthContext.Provider value={username}>
      <MyForm />
      <MyComponent/>
      <MyTable />
      <MyComponent2 />
    </AuthContext.Provider>
  )
}

export default App
