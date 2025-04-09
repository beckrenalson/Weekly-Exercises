import { useState } from 'react'
import './App.css'
import { WhereAreWe } from './components/WhereAreWe'
import { Weather } from './components/Weather'

function App() {

  return (
    <>
  <WhereAreWe
  station = "Newmarket"
  />
  <Weather
  temperature = "19°C"
  />
    </>
 

  )
}

export default App
