import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/checkout' element={KK}></Route>
      <Route path='/Logout' element={ <h1>LOGOUT PAGE</h1>}></Route>
    </Routes>
    
    </>
  )
}

export default App
