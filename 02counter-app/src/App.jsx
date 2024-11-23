import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 1;
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1);
  }
  const subValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Basic counter using react app</h1>
      <h2>counter value: {counter}</h2>
      <hr />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
