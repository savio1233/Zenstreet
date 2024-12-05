'use client';
import React from 'react';
import { useSearchParams } from "next/navigation"; // For retrieving query parameters in Next.js

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Retrieve the email from the query parameter

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 text-center">
        <h1 className="text-xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-700">
          Congratulations! Your therapy session has been successfully scheduled.
          We're looking forward to helping you on your journey to better mental health.
        </p>
        <p className="text-sm mt-4 text-gray-500 italic text-left">Instructions</p>
        <ul className="text-left mt-2 text-gray-700">
          <li>
            1)<b>A confirmation email</b> with all the session details has been sent to{" "}
            <span className="text-blue-500">{email}</span>.
          </li>
          <li>
            2)If this is your first session, consider jotting down any key points or questions
            you want to discuss.
          </li>
        </ul>
        <button
          onClick={() => (window.location.href = "/")} // Redirect to home
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;