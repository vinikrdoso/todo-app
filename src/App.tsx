import { useState } from 'react'

import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-[#1A1A1A]'>
      <div className='h-[200px] w-full bg-[#0D0D0D] flex items-center justify-center'>
        <img src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default App
