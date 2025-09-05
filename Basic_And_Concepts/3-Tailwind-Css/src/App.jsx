import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let objectt={ // for passing into card
    username :"Vishal",
    age: 21
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind Test</h1>
     <Card userName="ChaiAur Code" someObject={objectt}/>
     <Card userName="ChaiAur"/>
    </>
  )
}

export default App
