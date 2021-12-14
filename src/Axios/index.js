import axios from 'axios'
axios
  .get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user')
  .then(Response => {
    console.log(Response.data)
  })
  .catch(Error => {
    console.log(Error)
  })
const AxiosTest = () => {
  return (
    <>
      <h1>axios를 테스트 해보겠다.</h1>
    </>
  )
}

export default AxiosTest
