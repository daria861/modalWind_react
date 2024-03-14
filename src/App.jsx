import { useState } from 'react'
import ModalWind from './components/Modal/ModalWind'
import './App.css'

function App() {

  const [modalState, setModalState] = useState(false)

  return (
    <>
    <div className="App">
      <ModalWind call={modalState} onDestroy ={() => setModalState(false)}/>
      <button onClick={() => setModalState(true)}>Open Modal</button>
    </div>
    </>
  )
}

export default App
