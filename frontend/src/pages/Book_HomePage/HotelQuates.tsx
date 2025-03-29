function HotelQuates() {
    return (
        <div className="w-full py-28 bg-gradient-to-b from-gray-600 to-gray-800 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-6xl font-bold text-white text-center px-4 max-w-5xl leading-tight mb-12 animate-fade-in">
                    Check-in to comfort, Check-out with
                    <span className="text-[#ff9b9b]"> unforgettable </span>
                    memories
                </h2>
                <div className="flex flex-col justify-center md:flex-row gap-8 items-center">
                    <div className="flex items-center bg-black/60 px-8 py-4 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
                        <span className="text-4xl font-bold mr-3 text-white">4.9</span>
                        <div className="flex text-[#ff9b9b] text-2xl">★★★★★</div>
                    </div>
                    <div className="h-8 w-px bg-gray-400 hidden "></div>
                    <div className="bg-black/60 px-8 py-4 rounded-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
                        <span className="text-white text-xl font-semibold">1000+ Happy Customers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HotelQuates;