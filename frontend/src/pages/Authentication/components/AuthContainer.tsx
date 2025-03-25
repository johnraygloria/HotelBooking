import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import loginIMG from "../../../assets/loginIMG.png";

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
      navigate(isLogin ? '/register' : '/login', { replace: true });
    }, 500);
  };

  return (
    <div className="relative  h-screen w-full overflow-hidden bg-gradient-to-br from-black to-red-900 opacity-90">
      <div className={`absolute flex h-full w-1/2 transition-all duration-500 ease-in-out ${
        isLogin ? 'left-0' : 'left-1/2'
      } ${isAnimating ? (isLogin ? '-translate-x-full' : 'translate-x-full') : ''}`}>
        <div className="flex h-full w-full items-center justify-center p-8">
          {isLogin ? (
            <LoginPage onToggleAuth={toggleAuthMode} />
          ) : (
            <RegisterPage onToggleAuth={toggleAuthMode} />
          )}
        </div>
      </div>

      <div className={`absolute flex h-full w-1/2 transition-all duration-500 ease-in-out ${
        isLogin ? 'left-1/2' : 'left-0'
      } ${isAnimating ? (isLogin ? 'translate-x-full' : '-translate-x-full') : ''}`}>
        <div className="relative h-full w-full py-3 px-3">
          <img 
            src={loginIMG}
            className="h-full w-full object-cover opacity-80"
            alt="Auth background"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 p-8 text-white">
            
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold">
                {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
              </h2>
              <p className="mb-6 text-xl">
                {isLogin 
                  ? 'Enter your personal details and start your journey with us' 
                  : 'To keep connected with us please login with your personal info'}
              </p>
              <button
                onClick={toggleAuthMode}
                className="cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-gray-800"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}