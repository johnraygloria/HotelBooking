import homepageBG from "../../assets/homepageBG.png"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function BookingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className='relative h-screen bg-[radial-gradient(circle_at_top_left,_black,_#7f1d1d,_black)] w-full flex flex-col justify-center items-center overflow-hidden'>
        <motion.div 
          className='absolute inset-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            className='w-full h-full object-cover transition-transform duration-10000 ease-in-out' 
            style={{ transform: isLoaded ? 'scale(1.05)' : 'scale(1)' }}
            src={homepageBG} 
            alt="Background" 
          />
        </motion.div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your Perfect Stay
          </motion.h1>
          <motion.p 
            className="text-xl mb-10 text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover luxury and comfort in our carefully selected hotels
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="cursor-pointer bg-[#7f1d1d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#9f2424] transition-all shadow-lg"
              id='/hotel'
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Hotels
            </motion.button>
            <motion.button 
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>  
    </>
  );
}

export default BookingPage;