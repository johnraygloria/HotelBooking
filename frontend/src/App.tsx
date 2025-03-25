
import './App.css'
import LoginPage from './pages/Authentication/LoginPage'
import AuthContainer from "./pages/Authentication/components/AuthContainer"
import RegisterPage from './pages/Authentication/RegisterPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthContainer />} />
        <Route path='/LoginPage' element={<LoginPage onToggleAuth={undefined}/>}/>
        <Route path='/RegisterPage' element={<RegisterPage onToggleAuth={undefined}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
