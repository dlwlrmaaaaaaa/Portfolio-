import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const PreviewImage = ({ showImage,closeImage, imageName }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleCloseImage = () => {
    closeImage();
  };

  return (
    <div className="fixed inset-0 z-[50] bg-gray-900/75 flex items-center justify-center">
      {/* Modal Content */}
      <div className="bg-white rounded-xl overflow-hidden flex flex-col p-4 w-4/5 md:w-3/4 xl:w-1/2">
        {/* Image */}
        <img
           src={imageName}
            alt="/" 
            className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg"
        />
      </div>
      
      {/* Close Button */}
      <div
        className="absolute right-6 top-6 cursor-pointer"
        onClick={handleCloseImage}
      >
        <IoMdClose className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default PreviewImage;
