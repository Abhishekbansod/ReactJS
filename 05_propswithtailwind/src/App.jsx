import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {

  let myDetails = {
    username : 'Abhishek',
    surname : 'bansod',
    age : 24
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Cards username = 'Abhishek' surname = 'bansod' btnText = 'Click here to visit Profile!' obj = {myDetails}/>
      <Cards username = 'Nanda' surname = 'maheshwari' btnText = 'Click here to see Portfolio!'/>
    </>
  )
}

export default App
