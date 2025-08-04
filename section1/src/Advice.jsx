import { useState , useEffect } from 'react'

export default function Advice() {

  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function fetchData() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>{advice}</h1>
      <p>This is a simple React app</p>
      <button onClick={fetchData}>get advice</button>
      <Msg count={count} />
    </div>
  )
}


export function Msg(props) {
  return (
    <p>You have viewed <strong>{props.count}</strong> advice</p>
  )
}