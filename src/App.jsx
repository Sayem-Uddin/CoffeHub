
import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
function App() {


  return (
    <>
     <Navbar></Navbar>
     <Home></Home>
      <h1>Vite + React</h1>
     <Outlet></Outlet>
    </>
  )
}

export default App
