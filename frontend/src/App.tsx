import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/Authentication/LoginPage';
import AuthContainer from "./pages/Authentication/components/AuthContainer";
import RegisterPage from './pages/Authentication/RegisterPage';
import LandingPage from './pages/Landinge/LandingPage';
import BookPage from './pages/booking'
import Navbar from './pages/context/Navbar';

function AppContent() {
  const location = useLocation();
  const shouldhideNavbar =["/loginpage","/registerpage"];
  const hideNavbar = shouldhideNavbar.some(route => location.pathname.startsWith(route))
  return (
    <>
    {!hideNavbar && <Navbar />}
      <Routes>
      <Route path="/*" element={<AuthContainer />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage/loginpage/" element={<LoginPage/>} />
        <Route path="/landingpage/loginpage/registerpage" element={<RegisterPage onToggleAuth={undefined} />} />
        <Route path="/BookPage" element={<BookPage />} />

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
