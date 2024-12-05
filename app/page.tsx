'use client';
import React from 'react';
import Header from './Components/Header';
import AboutSection from './Components/About';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Blue */}
      <div className="w-1/3 bg-blue-500 text-white flex flex-col items-center justify-start p-6">
        <Header />
      </div>

      {/* Right Section - White */}
      <div className="w-2/3 bg-white p-6 overflow-auto">
        <AboutSection />
      </div>
    </div>
  );
}