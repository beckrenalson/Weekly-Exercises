import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProfileCard } from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard 
        name="Beck"
        title="Developer"
        description="Learing React"
        age="22"
      />
      <ProfileCard 
        name="Sosa"
        title="Artist"
        description="Bang Bang"
        age="300"
      />
    </>
  )
}

export default App
