import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import ApiAxios from './modules/ApiAxios'

export default function App() {


  // eslint-disable-next-line no-undef
  const userId = process.env.USER_ID;

  // Hooks
  const [user, setUser] = useState([]);

  useEffect(() => {
    ApiAxios.get(`${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <Router>
      <Header user={user}/>
      <Routes>
        <Route path='/' element={<Home user={user} />}/>
        <Route path='/user/:id' element={<UserPage />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer /> 
    </Router>
  )
}