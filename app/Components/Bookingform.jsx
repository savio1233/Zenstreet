'use client'; // Required for React hooks in a client-side component
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import for client-side navigation in Next.js 13+

const BookingForm = () => {
  const [isReferred, setIsReferred] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter(); // Initialize router for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the confirmation page with the email query parameter
    router.push(`/confirmation?email=${encodeURIComponent(email)}`);
  };

  const handleVerify = () => {
    alert("Employer verified successfully!");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        {/* Header Section */}
        <div className="bg-blue-500 text-white rounded-t-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Sat, 06 Aug</p>
            <p className="text-sm">3:30 PM - 4:20 PM</p>
          </div>
          <p className="font-semibold text-lg">₹ 2,400/-</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Name Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-2 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-2 border rounded-lg"
              required
            />
          </div>

          {/* Email Field */}
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 border rounded-lg text-black"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />

          {/* Phone Field */}
          <div className="flex gap-4">
            <select className="p-2 border rounded-lg">
              <option value="+91">+91</option>
              {/* Add more country codes here */}
            </select>
            <input
              type="tel"
              placeholder="9000 000000"
              className="flex-1 p-2 border rounded-lg"
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            You will receive booking details on WhatsApp
          </p>

          {/* Employer Referral */}
          <div className="flex items-center gap-2">
            <input
              id="employerCheck"
              type="checkbox"
              className="h-4 w-4"
              onChange={(e) => setIsReferred(e.target.checked)}
            />
            <label htmlFor="employerCheck" className="text-sm">
              Yes, I am employed under a partnering company
            </label>
          </div>

          {/* Employer Info */}
          {isReferred && (
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Partnering Company Name or Company ID"
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={handleVerify}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Book session
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;