import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './useState/Counter'
import Info from './useEffect/Info'
import AxiosTest from './Axios'
import Profile from './useEffect/Object'
import Button from './useEffect/Button'
import GetAPI from './useEffect/GetAPI'
import Main from './useContext/Main'
import InputSample from './useRef/InputSample'
import Variable from './useRef/Variable'
import State from './State/App'
import UseInput from './UseInput'
import UseTabs from './UseTabs'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/usehooks"
            element={
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
            }
          ></Route>
          <Route path="/axios" element={<AxiosTest />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/GetAPI" element={<GetAPI />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/InputSample" element={<InputSample />}></Route>
          <Route path="/Variable" element={<Variable />}></Route>
          <Route path="/State" element={<State />}></Route>
          <Route path="/useInput" element={<UseInput />}></Route>
          <Route path="/useTabs" element={<UseTabs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
