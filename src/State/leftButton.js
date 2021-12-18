import React from 'react'

const LeftButton = props => {
  return (
    <button type="button" onClick={props.decreasing}>
      빼기
    </button>
  )
}

export default LeftButton
