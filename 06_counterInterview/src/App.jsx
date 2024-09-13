import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(20)
  // let counter = 20

  function valueAdded(){

    //So here the function calls will be sent in batches. 
    //React will see them as the same operation and perform it only once. 
    //the counter will increase by only 1 count.
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)


    //To increase it by four/more counts, use the callback which the setCounter accepts 
    //and increase it one by one. So, the first function will be called first, 
    //the callback will be executed and the next function call will be executed.

    //+4 will be added in the current counter value & displayed on UI
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

    //above implementation & this one, both are same
    // setCounter((counter) => counter + 1)
    // setCounter((counter) => counter + 1)
    // setCounter((counter) => counter + 1)
    // setCounter((counter) => counter + 1)
    
  }

  function valuedRemoved(){
    setCounter(counter - 1)
  }
  

  return (
    <>
      <h1>Counter : {counter} </h1>
      <button onClick={valueAdded} >addValue {counter} </button> <button onClick={valuedRemoved}>removeValue {counter} </button>
    </>
  )
}

export default App


