import { IconX } from "@tabler/icons-react";

interface ModalImageProps {
    isImageOpen: boolean;
    onClose: () => void;
    bookNow?: string | null;
}

export const ModalImage: React.FC<ModalImageProps> = ({ isImageOpen, onClose, bookNow}) => {

    return (    
        <>
        {isImageOpen && bookNow &&(
            <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800/60 backdrop-blur-sm z-50 ">
                {bookNow}
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full relative">

            <button
            className="absolute top-4 right-4 text-gray-500 hover:text-[#7f1d1d] transition-colors p-1.5 rounded-full hover:bg-gray-100"
            onClick={onClose}>
                <IconX size={20}/>
            </button>
            </div>
            </div>
        </>
        )}
        </>
    )
}
export default ModalImage;