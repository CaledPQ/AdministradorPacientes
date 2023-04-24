import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Formulario from './Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="header">
      <Header/>
      </div>
      <div className="body">
      <Formulario/>

      </div>
     
      
    </div>
    
  )
}

export default App
