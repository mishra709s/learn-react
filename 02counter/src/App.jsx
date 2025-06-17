import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 5
  const increment = () => {
    if (counter < 20) {
      setCounter((prevState) => prevState + 1)
    }
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={increment}>Add Value {counter}</button>
      <br />
      <button onClick={decrement}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
