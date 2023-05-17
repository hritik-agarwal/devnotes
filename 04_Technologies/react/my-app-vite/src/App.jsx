import {useEffect, useState} from 'react'

const Timer = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    console.log('start timer')
    const id = setInterval(() => {
      setTime(prev => prev + 1)
      console.log('inside timer')
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  return <h1>{time}</h1>
}

const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increaseCount1 = () => {
    setCount1(count1 + 1)
    console.log({count1})
  }

  const increaseCount2 = () => {
    setCount2(prev => prev + 1)
    console.log({count2})
  }

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={increaseCount1}>Increase Count1</button>
      <h1>{count2}</h1>
      <button onClick={increaseCount2}>Increase Count2</button>
      {count2 % 2 && <Timer />}
    </div>
  )
}
export default App
