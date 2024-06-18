import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer /> 
    </Router>
  )
}