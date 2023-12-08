
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login' 
import Signup from './pages/signup/Signup'
import Profile from './pages/profile/Profile'
import Navbar from './components/navbar/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

function App() {
 

  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }/>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
