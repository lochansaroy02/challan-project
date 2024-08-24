import { useState } from 'react'
import './App.css'
import Entry from './components/Entry'
import Output from './components/Output'

function App() {
  const [data, setData] = useState(null)
  return (

    <div className='flex h-screen justify-center'>
      <Entry setData={setData} />
      <Output data={data} />
    </div>

  )
}

export default App
