import React, { useState } from 'react'

const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue)
  const onChange = event => {
    const {
      target: { value },
    } = event
    let willUpdate = true
    if (typeof validator === 'function') {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange }
}

const UseInput = () => {
  const maxLen = value => value.length <= 10
  const name = useInput('sion', maxLen)

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />
    </div>
  )
}

export default UseInput
