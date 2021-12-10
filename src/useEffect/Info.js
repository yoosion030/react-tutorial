import React, { useState, useEffect } from 'react'

const Info = () => {
  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  useEffect(() => {
    console.log('effect')
    console.log(name)
    return () => {
      console.log('cleanup')
      console.log(name)
    }
  })

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickName = e => {
    setNickName(e.target.value)
  }

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </>
  )
}

export default Info
