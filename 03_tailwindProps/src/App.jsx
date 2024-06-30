import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const Obj = {
    username: "Ronak",
    email:"ronaktalaviya51@gmail.com"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username= "Ronak" btnText="View Me"/>
    </>
  )
}

export default App
