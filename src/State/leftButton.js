//leftButton.js
import React from 'react'

const LeftButton = props => {
  return (
    <button type="button" onClick={props.decreasing}>
      빼기
    </button>
  )
}

export default LeftButton
// props.decreasing에는 App.js에 작성한 handleDecrease함수를 지정되어있다.
// 함수는 아래와 같다
// handleDecrease =() => {
//   this.setState({
//     value: this.state.value -1
//   })
// }
