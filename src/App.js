import React, { useState, useEffect } from 'react'
import Counter from './useState/Counter'
import Info from './useEffect/Info'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Counter></Counter>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
    </>
  )
}

export default App
