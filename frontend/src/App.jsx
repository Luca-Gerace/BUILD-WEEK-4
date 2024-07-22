import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from './modules/ApiAxios'

export default function App() {


  // eslint-disable-next-line no-undef
  const userId = process.env.USER_ID;

  // Hooks
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.error("Error fetching users:", error));
  }, [userId]);

  return (
    <Router>
      <Header user={user}/>
        <section className='w-full lg:w-[1024px] m-auto py-6 px-5 lg:px-0'>
          <Routes>
              <Route path='/' element={<Home user={user} setUser={setUser} />}/>
              <Route path='/user/:id' element={<UserPage />}/>
              <Route path='*' element={<Error />}/>
          </Routes>
        </section>
      <Footer /> 
    </Router>
  )
}