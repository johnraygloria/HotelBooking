
export default function LoginPage({ onToggleAuth = () => { } })  {
    return (

                <div className="w-1/2 text-white ">
                    <h1 className="text-5xl font-bold mb-6">Get Started</h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="cursor-pointer w-full px-4 py-3 bg-gradient-to-r from-black to-red-700 text-white rounded-3xl transition duration-300 ease-in-out hover:opacity-80">
                        Login
                    </button>
                    <div className="flex justify-center mt-8"> 
                        <h1 className="text-lg">
                        Don’t have an account? <span onClick={onToggleAuth} className="text-black font-bold cursor-pointer"> Sign up for Free</span>
                        </h1>
                    </div>
                </div>                   
    );
}

