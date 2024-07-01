import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*(){}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    document.getElementById("copy").innerHTML = "Copied!!"
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md my-3 mx-auto shadow-md rounded-lg px-2 py-3 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value= { password }
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        ref={passwordRef}
        readOnly/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' id='copy'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)
          }} />
          <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App