import { useState } from 'react';
import ModalDate from "../BookDate/ModalDate"
import ModalImage from "./ModalImage"

import Cindy from "../../assets/Cindy_Kelly/Hotel_Cindy.jpeg"
import RedDoors from "../../assets/Red_Doors/RED_DOORS.png"
import CherryMidTown from "../../assets/Cherry_MidTown/Cherry_Midtown.png"
import RainbowLand from "../../assets/Rainbow_Land/Rainbow_Land_Hotel.png"
import VascoHotelRestaurant from "../../assets/Vasco's Hotel & Restaurant/Vasco's Hotel & Restaurant.png"
import PalmTreeResort from "../../assets/Palm Tree Resort/Palm Tree Resort.png"
function Hotels() {
    const [openModalDate, setOpenModalDate] = useState(false);
    const [bookNow, setBookNow] = useState("");
    const [openImage, setOpenImage] = useState(false);

    const HotelNames = [
        {name:  "Cindy Kelly Hotel", image: Cindy },
        {name:  "RedDoorz", image: RedDoors},
        {name:  "Cherry Midtown", image: CherryMidTown},
        {name:  "RainbowLand", image: RainbowLand},
        {name:  "Vasco's Hotel Restaurant", image: VascoHotelRestaurant},
        {name:  "Palm Tree Resort",title: "", image: PalmTreeResort}       
    ] 
    const handleBookNow = (HotelNames: string) =>{
        setBookNow(HotelNames);
        setOpenModalDate(true);
        
    }
    const handleImageNow = (HotelNames: string) =>{
        setBookNow(HotelNames);
        setOpenImage(true);
    }
    return (
        <div className="bg-gradient-to-b from-gray-100 to-white py-32 px-4 md:px-8" id="hotel">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-15">
                    <h2 className="text-6xl font-bold text-gray-800 mb-6">Hotels</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam mollitia illum architecto veritatis, libero debitis .
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {HotelNames.map((hotel, item) => (
                        <div key={item} className="group bg-white rounded-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-500 shadow-xl hover:shadow-2xl">
                            <div className="h-80 bg-[#7f1d1d]/90 relative overflow-hidden">
                                <div className="absolute top-6 right-6 bg-white px-6 py-2 rounded-full text-[#7f1d1d] font-semibold z-10 shadow-lg">
                                    Featured
                                </div>
                                <div className="w-full h-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-700">
                                    <img src={hotel.image} alt="Hotel" className="w-full h-full object-cover" 
                                    onClick={() => handleImageNow(hotel.name)}/>
                                </div>
                            </div>
                          
                            <div className="p-10">
                                <div className="flex items-center mb-6">
                                    <div className="text-[#7f1d1d] text-lg">★★★★★</div>
                                    <span className="ml-3 text-gray-500">(48 reviews)</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7f1d1d] transition-colors">
                                {hotel.name}
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Experience ultimate comfort with our premium amenities and spectacular views.
                                </p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-4xl font-bold text-[#7f1d1d]">$299</span>
                                        <span className="text-gray-500">/night</span>
                                    </div>
                                    <button
                                    onClick={() => handleBookNow(hotel.name)}
                                     className="cursor-pointer bg-[#7f1d1d] text-white px-8 py-4 rounded-xl hover:bg-[#9f2424] transition-all shadow-lg hover:shadow-2xl transform hover:scale-105">
                                        Book Now
                                    </button>
                                  
                                </div>
                            </div>
                            
                        </div>
                    
                    ))}
                    <ModalImage isImageOpen={openImage} onClose={() => setOpenImage(false)} bookNow={bookNow}/>
                          
                      <ModalDate isOpen={openModalDate} onClose={() => setOpenModalDate(false)} bookNow={bookNow}/>
                </div>
            </div>
            
        </div>
        
    );
}

export default Hotels;