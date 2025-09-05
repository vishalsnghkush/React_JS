import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter=15 this is the classic javascript where we use directly like this but if we consider the ui update points of view
  // the things are getting changedd we use react to changes in ui & ux

  // so here are somes hooks which are used to do soo
  let [counter,setCounter] =useState(15) 
  const AddValue=()=>{
    console.log("Clicked ",counter)
    setCounter(counter++)
  }
  const RemoveValue=()=>{
    setCounter(counter--)
  }
  return (
    <>
    
    <h1>Chai and React</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={AddValue}>Add Value :{counter} </button>
    <br/>
    <button onClick={RemoveValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
