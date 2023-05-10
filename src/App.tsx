import { useState } from 'react'
import VisitUs from './routes/VisitUs'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <VisitUs />
  )
}
