'use client';
import React from 'react';
import Header from './Components/Header';
import AboutSection from './Components/About';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Blue */}
      <div className="background-center" style={{ backgroundImage: 'url(Background_-_49.jpg)' }}>
        <Header />
      </div>

      {/* Right Section - White */}
      <div className="w-2/2 bg-white p-6 overflow-auto">
        <AboutSection />
      </div>
    </div>
  );
}