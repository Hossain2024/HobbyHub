import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'

function App() {
  return (
  <Router>
    <div className='container'>
      <Navbar/>
      <AppRoutes/>
    </div>
    </Router>
  )
  
}

export default App
