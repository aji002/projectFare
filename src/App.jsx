import './App.css'
import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/allproject' element={<Projects/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
