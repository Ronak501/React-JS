import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("Value Added:", Math.floor(Math.random()*100));
    // counter = counter + 1;
    if( counter === 20){
      setCounter(counter)
    }else{
      setCounter(counter + 1)
    }
    // console.log("Clicked:",counter);
  }

  const removeValue = () => {
    if( counter === 0){
      setCounter(counter)
    }else{
      setCounter(counter - 1)
    }
  }
 
  return (
    <>
     <h1>Ronak's World</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br /><br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
