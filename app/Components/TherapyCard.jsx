'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const TherapyCard = ({ sessionName }) => {
  const router=useRouter();
  const [selectedDuration, setSelectedDuration] = useState("60 min");

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
  };
  const handleproceed = () =>{
    router.push("/page3");
  }
  

  return (
    <div className="w-80 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 text-center text-white">
      {/* Price and Session */}
      <div className="text-3xl font-bold">
        ₹3,200 <span className="text-lg font-normal">/ session</span>
      </div>

      {/* Session Duration Options */}
      <div className="flex justify-center gap-4 mt-4">
        {["45 min", "60 min", "90 min"].map((duration) => (
          <button
            key={duration}
            onClick={() => handleDurationClick(duration)}
            className={`px-4 py-2 rounded-full ${
              selectedDuration === duration
                ? "bg-white text-blue-600 font-semibold"
                : "bg-blue-500 text-white hover:bg-blue-400"
            }`}
          >
            {duration}
          </button>
        ))}
      </div>

      {/* Therapy Title (Single Session Name) */}
      <div className="text-xl font-semibold mt-6">
        <div>{sessionName}</div>
      </div>
      <div className="w-20 mx-auto mt-1 border-t-2 border-white"></div>

      {/* Therapy Details */}
      <ul className="text-left text-sm mt-6 space-y-2">
        <li>• Joint Evaluation</li>
        <li>• Communication Exercises</li>
        <li>• Conflict Resolution</li>
        <li>• Goal Setting</li>
        <li>• Follow up plan</li>
      </ul>

      {/* Proceed Button */}
      <button onClick={handleproceed} className="w-full mt-6 bg-white text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-100">
        Proceed
      </button>
    </div>
  );
};

export default TherapyCard;