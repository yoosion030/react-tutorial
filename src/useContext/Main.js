import React, { createContext } from 'react'
import Children from './Sub'

// AppContext 객체를 생성한다.
export const AppContext = createContext()

const Main = () => {
  const user = {
    name: '유시온',
    job: '학생',
  }

  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <Children />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default Main
