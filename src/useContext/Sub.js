import React from 'react'
import { AppContext } from './Main'

const Children = () => {
  return (
    <AppContext.Consumer>
      {user => (
        <>
          <h3>AppContext에 존재하는 값의 name은 {user.name}입니다.</h3>
          <h3>AppContext에 존재하는 값의 job은 {user.job}입니다.</h3>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Children
