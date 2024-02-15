import React from 'react'
import { useState } from 'react'
import InputField from './components/InputField'
import ColorBox from './components/ColorBox'
const App = () => {
  const [colorValue,setColorValue] = useState("")
  const [hexValue,setHexValue] = useState("")
  const [isDark,setIsDark]=useState(true)
  return (
    <main>
      <h1 className='header'>Color Generator</h1>
      <ColorBox
      colorValue={colorValue}
      hexValue={hexValue}
      isDark={isDark}
      />
      <InputField
      colorValue={colorValue}
      setColorValue={setColorValue}
      hexValue={hexValue}
      setHexValue={setHexValue}
      isDark={isDark}
      setIsDark={setIsDark}
      />
    </main>
  )
}

export default App
