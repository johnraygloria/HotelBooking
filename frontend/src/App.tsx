
import './App.css'
import LoginPage from './pages/Authentication/LoginPage'
import AuthContainer from "./pages/Authentication/components/AuthContainer"
import RegisterPage from './pages/Authentication/RegisterPage'
import LandingPage from './pages/Landinge/LandingPage'
import BookingPage from './pages/BookPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
        <Route path="/*" element={<AuthContainer />} />
        <Route path='/LandingPage/LoginPage' element={<LoginPage onToggleAuth={undefined}/>}/>
        <Route path='/LoginPage/RegisterPage' element={<RegisterPage onToggleAuth={undefined}/>}/>
        <Route path='/BookingPage' element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
