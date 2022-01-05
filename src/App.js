import React, { useState } from 'react'
import ThreeDLayout from './components/3dLayout'
import FlatLayout from './components/FlatLayout'

export default function App() {
  const [ flatLayout, setFlatLayout ] = useState(false)

  const toggleLayout = () => {
    if (!flatLayout) {
      setFlatLayout(true)
    } else {
      setFlatLayout(false)
    }
    console.log(flatLayout)
  }

  return (
    <>
    {
      flatLayout 
      ? <><button className='toggle' onClick={toggleLayout}>{!flatLayout ? '3D Layout' : 'Flat Layout'}</button><ThreeDLayout /></> 
      : <><button className='toggle' onClick={toggleLayout}>{!flatLayout ? '3D Layout' : 'Flat Layout'}</button><FlatLayout /></>
    }
    </>
  )
}