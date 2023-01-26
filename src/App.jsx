import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
