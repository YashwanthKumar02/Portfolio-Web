import { useState } from 'react'
import { Header, Details } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full bg-gray-400'>
    <Header />
    <Details />
    </div>
    </>
  )
}

export default App
