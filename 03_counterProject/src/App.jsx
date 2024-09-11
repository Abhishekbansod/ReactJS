import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //using hooks to update the values on frontend/UI
  let [counter, setCounter] = useState(0)
  // let counterValue = 17


  //addValue method -> adds value to the counter
  let addValue = () => {
    
    //just to check the function/method is running or not
    // console.log('value added', Math.random());

    //setting the value of counter using setCounter
    if(counter >= 20){
      setCounter(20)
    }
    else{
      setCounter(counter + 1)
    }
    
  }


  //removeValue method -> it decreases the value from counter
  let removeValue = () => {
    if(counter <= 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter project with React JS</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter} </button> 
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
