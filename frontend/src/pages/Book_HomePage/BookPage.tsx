import Hotels from './Hotels';
import homepageBG from "../../assets/homepageBG.png"
import HotelQuates from './HotelQuates';
function BookingPage() {
  return (
    <>
      <div className='relative h-screen bg-[radial-gradient(circle_at_top_left,_black,_#7f1d1d,_black)] w-full flex flex-col justify-center items-center'>
        <div className='absolute inset-0'>
          <img className='w-full h-full object-cover opacity-25 transition-opacity duration-700' src={homepageBG} alt="" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">Find Your Perfect Stay</h1>
          <p className="text-xl mb-10 text-gray-300">Discover luxury and comfort in our carefully selected hotels</p>
          <div className="space-x-4">
            <button className="bg-[#7f1d1d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#9f2424] transition-all transform hover:scale-105 shadow-lg"
            id='/hotel'>
              Browse Hotels
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>  
      <HotelQuates/>
      <Hotels />
    </>
  );
}

export default BookingPage;