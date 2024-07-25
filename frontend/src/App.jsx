import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import { UserProvider } from './context/UserContext'

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
          <section className='w-full lg:w-[1024px] m-auto py-6 px-5 lg:px-0'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/:id' element={<UserPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Error />} />
            </Routes>
          </section>
        <Footer /> 
      </UserProvider>
    </Router>
  )
}