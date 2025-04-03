import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { DatePicker } from "./Components/DatePicker";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookNow?: string;
  
}

export const ModalDate: React.FC<ModalProps> = ({ isOpen, onClose, bookNow }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const handleCheckInChange = (date: Date) => {
    setCheckInDate(date);
    
    if (checkOutDate && checkOutDate < date) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay);
    }
  };

  const handleCheckOutChange = (date: Date) => {
    setCheckOutDate(date);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-800/60 backdrop-blur-sm z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4
            }}
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full relative border border-gray-200 m-4"
          >
            <motion.button 
              onClick={onClose} 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#7f1d1d] transition-colors p-1.5 rounded-full hover:bg-gray-100"
            >
              <IconX size={20} />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Hotel</h2>
              <p className="text-gray-600">Choose your preferred hotel, check-in and check-out dates, room type, and number of guests.</p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Hotel</label>
                <select className="w-full text-black p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7f1d1d] focus:border-[#7f1d1d] outline-none transition-all shadow-sm"
                value={bookNow}
                disabled={!!bookNow}
                >
                    {bookNow ? (
                        <option value={bookNow}>{bookNow}</option>
                    ):(
                        <>
                        <option value="">Select a Hotel</option>
                        <option>Cindy Kelly Hotel</option>
                        <option>RedDoorz</option>
                        <option>Cherry Midtown</option>
                        <option>RainbowLand</option>
                        <option>Vasco's Hotel Restaurant</option>
                        <option>Palm Tree Resort</option>
                        </>
                    )}
                </select>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                <div>
                  <DatePicker
                    label="Check-in"
                    selectedDate={checkInDate}
                    onChange={handleCheckInChange}
                    placeholder="Select check-in date"
                    minDate={new Date()} 
                  />
                </div>
                <div>
                  <DatePicker
                    label="Check-out"
                    selectedDate={checkOutDate}
                    onChange={handleCheckOutChange}
                    placeholder="Select check-out date"
                    minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select className="w-full p-3.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7f1d1d] focus:border-[#7f1d1d] outline-none transition-all shadow-sm">
                  <option>Single</option>
                  <option>Double</option>
                  <option>Suite</option>
                </select>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <input type="number" min="1" defaultValue="1" className="w-full p-3.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7f1d1d] focus:border-[#7f1d1d] outline-none transition-all shadow-sm" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 text-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer relative px-10 py-3.5 rounded-lg font-semibold text-white bg-[#7f1d1d] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-0 bg-[#5f1515] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalDate;