import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm/>
       <Authenticate/>
    </>
  );
}

export default App
