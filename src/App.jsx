import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './Form'
import { ColorCard } from './ColorCard'
import Values from 'values.js'
import { ColorList } from './ColorList'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [shades, setShades] = useState(new Values('#f15025').all(10))

  const updateShades = (color) => {
    const newShades = new Values(color).all(10)
    setShades(newShades)
  }

  return (
    <main>
      <Form updateShades={updateShades}/>
      <ColorList shades={shades}/>
      <ToastContainer />
    </main>
  )
}

export default App
