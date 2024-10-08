import { useState } from 'react'


function App() {

  const [color, setColor] = useState("yellow")

  return (
    <>
      {/* <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => {setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "red" }}>Red</button>

            <button onClick={() => {setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "green" }}>Green</button>

            <button onClick={() => {setColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button onClick={() => {setColor("violet")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "violet" }}>Violet</button>

            <button onClick={() => {setColor("indigo")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "indigo" }}>Indigo</button>

            <button onClick={() => {setColor("orange")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: "orange" }}>Orange</button>
          </div>

        </div>

      </div> */}

      <div className='w-full h-screen' style={{backgroundColor: color}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => {setColor("Violet")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "violet"}}>Violet</button>

            <button onClick={() => {setColor("Indigo")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Indigo"}}>Indigo</button>

            <button onClick={() => {setColor("Blue")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Blue"}}>Blue</button>

            <button onClick={() => {setColor("Green")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Green"}}>Green</button>

            <button onClick={() => {setColor("Yellow")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Yellow"}}>Yellow</button>
            
            <button onClick={() => {setColor("Orange")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Orange"}}>Orange</button>

            <button onClick={() => {setColor("Red")}} className='outline-none px-4 py-1 text-white rounded-full shadow-sm' 
            style={{backgroundColor: "Red"}}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
