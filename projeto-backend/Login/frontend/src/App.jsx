//rafce
import React from 'react'
import Register from './components/register.jsx'
import {Link, Routes, Router} from "react-router-dom"

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/register">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Router path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;