import React, {useState, useEffect} from 'react';

import randomcolor from 'randomcolor'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  function counterChanger() {
    setCount(currentCounter => currentCounter + 1)
  }
 
  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  return (
    <div className="jumbotron text-center">
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={counterChanger} className="btn btn-primary">ChangeMe!</button>
    </div>
  )
}

export default App;
