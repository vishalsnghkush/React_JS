import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const passwordRef = useRef(null)
  const [length, setlength] = useState(8)
  const [isNumber, setNumber] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setpassword] = useState("")

  const PassWordGenerator = useCallback(() => {
    let pass = ""
    let num = '0123456789'
    let str = "abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (isNumber) {
      str += num
    }
    let charr = "`~!@#$%^&*()[]{}"
    if (isChar) {
      str += charr
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setpassword(pass)
  }, [length, isNumber, isChar, setpassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    PassWordGenerator()
  }, [length, isNumber, isChar, PassWordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
    rounder-3xl px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>PassWord Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='PassWord'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-3
        py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label > Length :{length}</label>
          </div>
          <input type="checkbox"
            defaultChecked={isNumber}
            onChange={() => { setNumber((prev) => !prev) }} />
          <label>Number</label>
          <input type="checkbox"
            defaultChecked={isChar}
            onChange={() => { setNumber((prev) => !prev) }} />
          <label>Character</label>
        </div>
      </div>
    </>
  )
}

export default App
