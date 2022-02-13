//rightButton.js
import React from 'react'

const RightButton = props => {
  return (
    <button type="button" onClick={props.increasing}>
      더하기
    </button>
  )
}

export default RightButton
// props.increasing에는 App.js에 작성한 handleIncrease함수를 지정되어있다.
// 함수는 아래와 같다
// handleIncrease =() => {
//   this.setState({
//     value: this.state.value +1
//   })
// }
