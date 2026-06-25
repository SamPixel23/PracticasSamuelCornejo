import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Tarjeta from './tarjeta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tarjeta nombre='Querer gaseosa' pais='El Salvador'/>
    <Tarjeta  nombre='Megustasblanca *3*' pais='El Salvador'/>
    <Tarjeta  nombre='Cuantajtoritillajecomeujted' pais='Honduras'/>
    </>
  )
}

export default App
