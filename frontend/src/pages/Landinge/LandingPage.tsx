import { useNavigate } from "react-router-dom";
import LandingePage from "../../assets/LandingBG.png"

function LandingPage() {
    const navigate = useNavigate();

const handleGetStarted = () => {
 navigate("/LandingPage/login"); 
}
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_black,_#735858,_black)] opacity-100  animate-interstellarPulse ">
          <img src={LandingePage} alt=""
          className="opacity-15 h-full w-full" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl max-w-2xl font-bold mb-6 leading-tight">
            Seamless Scheduling, Effortless Success
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Book appointments with ease and stay organized with our reliable booking system. 
            Simplify your workflow and focus on what matters most.
          </p>
          <button className="bg-[radial-gradient(circle_at_top,_black,_#7f1d1d,_black)] cursor-pointer opacity-90 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 animate-swirlGradient "
          onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  