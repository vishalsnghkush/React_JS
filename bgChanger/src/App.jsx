import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-screen h-screen'style={{ backgroundColor: color }}></div>
      <div className="fixed bottom-10 w-[100%] h-16 bg-white flex justify-center items-center text-center rounded-3xl m-auto gap-[20px]">
        <button className='bg-red-200 p-[15px] px-[30px] rounded-3xl '
        style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
        <button className='bg-red-200 p-[15px] px-[30px] rounded-3xl '
        style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
        <button className='bg-red-200 p-[15px] px-[30px] rounded-3xl '
        style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
        <button className='bg-red-200 p-[15px] px-[30px] rounded-3xl '
        style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
        <button className='bg-red-200 p-[15px] px-[30px] rounded-3xl '
        style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
      </div>

    </>
  )
}

export default App
