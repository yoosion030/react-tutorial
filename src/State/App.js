//App.js

import React from 'react'

import RightButton from './rightButton'
import LeftButton from './leftButton'
import Result from './result'

class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  handleIncrease = () => {
    this.setState({
      value: this.state.value + 1,
    })
  }
  handleDecrease = () => {
    this.setState({
      value: this.state.value - 1,
    })
  }

  render() {
    return (
      <div>
        <Result sum={this.state.value} />
        {/* ///현재 값을 보여주는 component */}
        <LeftButton decreasing={this.handleDecrease} />
        {/* //클릭 할 때 마다 숫자를 1씩 감소시키는 컴포넌트 */}
        <RightButton increasing={this.handleIncrease} />
        {/* //클릭 할 때 마다 숫자를 1씩 증가시키는 컴포넌트 */}
      </div>
    )
  }
}

export default State
