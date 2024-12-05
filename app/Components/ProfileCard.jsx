"use client";
import React, { useState } from "react";
import { FaEnvelope,FaShareAlt, FaCheckCircle, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
const ProfileCard = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const profileLink = "http://www.therapist-swetha.com/profile/view"; // Replace with dynamic link if needed

  const toggleSharePopup = () => {
    setIsShareOpen(!isShareOpen);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(profileLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
      {/* Share Button */}
      <button
        onClick={toggleSharePopup}
        className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600"
      >
        <FaShareAlt size={20} />
      </button>

      {/* Share Popup */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border shadow-lg rounded-md p-6 w-80 relative">
            {/* Close Button */}
            <button
              onClick={toggleSharePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕ {/* Close icon */}
            </button>

            {/* Link Textbox */}
            <p className="text-gray-600 mb-2">Share</p>
            <input
              type="text"
              value={profileLink}
              readOnly
              className="text-black w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={(e) => e.target.select()} // Select text on click for easy copying
            />

            {/* Social Media Icons */}
            <div className="flex justify-around items-center mb-4">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${profileLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={`https://wa.me/?text=${profileLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${profileLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={`https://mail.google.com/mail/u/0/#inbox`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyLinkToClipboard}
              className="w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}

      {/* Profile Details */}
      <div className="flex flex-col items-center">
        <img
          src="/image.png"
          alt="Swetha Varma"
          className="rounded-full w-40 h-40 object-cover"
        />
        <div className="flex items-center mt-4">
          <h2 className="text-black text-xl font-bold">Swetha Varma</h2>
          <FaCheckCircle className="text-blue-500 ml-2" size={20} />
        </div>
        <p className="text-gray-500">Consultant Clinical Psychologist</p>
        <p className="text-gray-700 mt-2">10+ Years of experience</p>
        <p className="text-gray-700 mt-1">
          Starts at <span className="font-bold">₹1,200/Session</span>
        </p>
        <p className="text-gray-500">Block A2, Delhi</p>
      </div>
    </div>
  );
};

export default ProfileCard;
