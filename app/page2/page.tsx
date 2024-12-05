'use client';
import TherapyCard from "../Components/TherapyCard";
import React, { useState } from "react";
import { FaArrowLeft,FaReact,FaTimes} from 'react-icons/fa';


const Page2 = () => {
  const sessionNames = ["Group Therapy", "Individual Therapy", "Couple Therapy"];
  const [closeButton, setCloseButton] = useState(true);
  const handleBack = () => {
    window.history.back();
  };
  const handleClose = () => {
    setCloseButton(false);
  };


  return (
    <div className="bg-gray-100">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center space-x-2 text-black p-2 hover:bg-gray-200"
      >
        <FaArrowLeft />
        <span>Available Sessions</span>
      </button>

      {/* Closeable Notification */}
      {closeButton && (
       <div className=" bg-blue-100 rounded-lg p-6 mt-4 mx-auto max-w-md relative border-2 border-blue-400">
       <div className="flex items-center justify-between">
         <div className="flex items-center space-x-2">
           <FaReact className="text-blue-500" /> {/* Add styling as needed */}
           <span>Click on the duration to see pricing details</span>
         </div>
         <button
           className="flex items-center space-x-3 text-white px-4 py-1 rounded"
           onClick={handleClose}
         >
           <FaTimes />
         </button>
       </div>
     </div>
      )}

      {/* Therapy Cards */}
      <div className="flex items-center justify-center h-screen bg-gray-100 space-x-10">
        {sessionNames.map((sessionName, index) => (
          <TherapyCard key={index} sessionName={sessionName} />
        ))}
      </div>
    </div>
  );
};

export default Page2;