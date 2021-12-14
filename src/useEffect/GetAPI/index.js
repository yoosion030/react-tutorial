import React, { useState, useEffect } from 'react'
function getUserAPI(userID) {
  // .... 비동기통신
  return new Promise(resolve => {
    resolve({
      name: 'jack',
      age: '30',
    })
  })
}
export default function GetAPI({ userID }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    getUserAPI(userID).then(data => setUser(data))
  }, [userID])
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  )
}
