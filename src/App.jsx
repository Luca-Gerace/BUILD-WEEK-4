import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Experiences from './components/Experiences'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import ProfileInfo from './components/ProfileInfo'

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user/:id' element={<UserPage />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Experiences />
      <Footer /> 
    </Router>
  )
}