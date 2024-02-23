import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeMain from './components/TimeMain'

function App() {

  return (
    <>
    <div className=' h-screen w-full p-0 m-0 flex justify-center items-center '>
      <div className='pomodoro-container'>
      <h3></h3>
      <div className='pomodoro-timer'>
      <TimeMain/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
