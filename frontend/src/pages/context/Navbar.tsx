import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/' || location.pathname === '/landingpage';

    return (
        <div className="fixed top-0 left-0 right-0 p-6 z-30 ">
            <div className="mx-20 flex justify-between">
                <h1 className="flex justify-center text-3xl items-center font-bold text-white hover:text-[#7f1d1d] transition-colors duration-300">
                    Logo
                </h1>

                <ul className="flex items-center gap-8">
                    {isLandingPage ? (
                        <li>
                            <a href="/loginpage" className="relative text-white group">
                                <span className="relative z-10 font-semibold hover:text-[#7f1d1d] transition-colors duration-300">
                                    Sign in
                                </span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f1d1d] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ) : (
                        <>
                            <li>
                                <a href="/" className="relative text-white group">
                                    <span className="relative z-10 font-semibold hover:text-[#7f1d1d] transition-colors duration-300">
                                        Home
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f1d1d] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="relative text-white group">
                                    <span className="relative z-10 font-semibold hover:text-[#7f1d1d] transition-colors duration-300">
                                        About
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f1d1d] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="relative text-white group">
                                    <span className="relative z-10 font-semibold hover:text-[#7f1d1d] transition-colors duration-300">
                                        Contact
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f1d1d] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                            <li>
                                <button className="relative px-6 py-3 rounded-lg font-semibold text-white bg-[#7f1d1d] overflow-hidden group">
                                    <span className="relative z-10">Book Now</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#9f2424] to-[#7f1d1d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>
                            </li>
                            <li>
                                <a href="/registerpage" className="relative text-white group">
                                    <span className="relative z-10 font-semibold hover:text-[#7f1d1d] transition-colors duration-300">
                                        Sign in
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f1d1d] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
