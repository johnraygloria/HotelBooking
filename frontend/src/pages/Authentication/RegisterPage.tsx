
function RegisterPage({onToggleAuth = () => { } }) {
  return (
                <div className="w-full text-white -z-50">
                    <h1 className="text-4xl  text-white font-bold mb-6">Create an Account</h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Fullname:
                        </label>
                        <input
                            type="fullname"
                            id="fullname"
                            className="w-full px-4 py-3 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400 transition duration-200"
                            placeholder="Enter your Fullname"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400 transition duration-200"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password" 
                            className="w-full px-4 py-3 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400 transition duration-200"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                          Confirm Password:
                        </label>
                        <input
                            type="confirmpassword"
                            id="confirmpassword" 
                            className="w-full px-4 py-3 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400 transition duration-200"
                            placeholder="Confirm your password"
                        />
                    </div>  
                    <button className="relative w-full px-4 py-3 text-white rounded-3xl transition duration-300 ease-in-out hover:opacity-80 bg-gradient-to-l from-black via-red-900 to-black animate-gradientMove">
                        Register
                    </button>
                    <div className="flex justify-center mt-8">
                        <h1 className="text-lg">
                        Already have an account? <span onClick={onToggleAuth} className="text-black font-bold cursor-pointer"> Sign in</span>
                        </h1>
                    </div>
                </div>                   

  )

}
export default RegisterPage;