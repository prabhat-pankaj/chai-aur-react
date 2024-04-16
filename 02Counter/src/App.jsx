import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, chaiCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log('clicked', counter);
    // counter += 1
    chaiCounter(counter + 1)
  }

  const removeValue = () => {
    chaiCounter(counter - 1)
  }

  return (
    <>
      
      <h1>Chai Aur React</h1>
      <h3>Counter Value: {counter}</h3>

      <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
     
    </>
  )
}

export default App
