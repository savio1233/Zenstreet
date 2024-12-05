'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 


const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1); // Replace with dynamic month data
  const startDayOfWeek = 1; // Start day of the month (0=Sunday, 1=Monday, etc.)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const [currentMonth, setCurrentMonth] = useState(7); // Example: August (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <button onClick={handlePreviousMonth} className="text-gray-500 hover:text-black">
          &lt;
        </button>
        <div className="text-lg font-semibold">
          {currentYear} {months[currentMonth]}
        </div>
        <button onClick={handleNextMonth} className="text-gray-500 hover:text-black">
          &gt;
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600 mt-4">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center mt-2">
        {/* Empty slots for padding before the first day */}
        {Array.from({ length: startDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="text-transparent">
            0
          </div>
        ))}
        {/* Render Days */}
        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`py-2 rounded-full ${
              selectedDate?.getDate() === day &&
              selectedDate?.getMonth() === currentMonth &&
              selectedDate?.getFullYear() === currentYear
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-100 text-black'
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const navigateToPage4 = () => {
    router.push('/page4'); // Navigates to the /page4 route
  };
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState([]); // For multiple selections
  const [selectedDate, setSelectedDate] = useState(null);

  const buttonData = [
    { id: 1, icon: faHouse, label: 'In-Person Therapy' },
    { id: 2, icon: faVideo, label: 'Video Therapy' },
    { id: 3, icon: faPhone, label: 'Call Therapy' },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleButtonClick2 = (buttonId) => {
    setSelectedButton2(buttonId);
  };
  // Handle button3 clicks to allow multiple selections
  const handleButtonClick3 = (buttonId) => {
    setSelectedButton3((prevSelectedSlots) => {
      if (prevSelectedSlots.includes(buttonId)) {
        return prevSelectedSlots.filter((id) => id !== buttonId);
      } else {
        return [...prevSelectedSlots, buttonId];
      }
    });
  };

  const areBothSelected = selectedButton && selectedButton2;
  const threeAreSelected = areBothSelected && selectedButton3.length > 0;

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      {/* Back Button */}
      <div>
        <button
          className="flex items-center space-x-2 text-black p-2 hover:bg-gray-200"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Available Therapies</span>
        </button>
      </div>

      {/* Therapy Options */}
      <section>
        <div>
          <h4 className="text-lg font-bold text-center">Please Select Therapy Mode</h4>
          <div className="flex justify-center items-center mt-6 gap-8">
            {buttonData.map((button) => (
              <button
                key={button.id}
                className={`p-4 rounded-lg flex flex-col items-center justify-center w-40 h-40 ${
                  selectedButton === button.id ? 'bg-blue-500 text-black' : 'bg-blue-100'
                } hover:bg-gray-200`}
                onClick={() => handleButtonClick(button.id)}
              >
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={button.icon} className="w-6 h-6" />
                </div>
                <p className="mt-4 text-center text-sm font-medium">{button.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter By */}
      <section>
        <div>
          <h4 className="text-lg font-bold text-left mt-8 ml-8 ">Filter By</h4>
          <div className="gap-4 text-center">
            <button
              className={`py-4 mr-40 px-20 rounded-full ${
                selectedButton2 === 1 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => handleButtonClick2(1)}
            >
              Slots
            </button>
            <button
              className={`py-4 px-20 rounded-full ${
                selectedButton2 === 2 ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => handleButtonClick2(2)}
            >
              Date
            </button>
          </div>
        </div>
      </section>

      {/* Select Slots */}
      <section>
        {areBothSelected && (
          <div>
            <h4 className="text-lg font-bold text-left mt-8 ml-7">Select Slots</h4>
            <div className="grid grid-cols-3 gap-6 px-8 py-7 text-center">
              {/* Render slots dynamically */}
              {['Morning', 'Afternoon', 'Evening'].map((timePeriod, index) => {
                const slots = [
                  { id: 1, time: '8:00-8:45 AM' },
                  { id: 2, time: '9:00-10:45 AM' },
                  { id: 3, time: '10:00-11:45 AM' },
                  { id: 4, time: '12:00-2:45 PM' },
                  { id: 5, time: '8:00-8:45 PM' },
                  { id: 6, time: '9:00-10:45 PM' },
                  { id: 7, time: '10:00-11:45 PM' },
                  { id: 8, time: '12:00-2:45 AM' },
                  { id: 9, time: '3:00-4:45 PM' },
                  { id: 10, time: '4:00-5:45 PM' },
                  { id: 11, time: '4:00-5:45 PM' },
                  { id: 12, time: '4:00-5:45 PM' },
                ].slice(index * 4, (index + 1) * 4); // Slice slots based on the time period

                return (
                  <div key={index}>
                    <h6>{timePeriod}</h6>
                    <div>
                      {slots.map((slot) => (
                        <button
                          key={slot.id}
                          className={`rounded-full border border-black px-10 py-4 m-3 ${
                            selectedButton3.includes(slot.id) ? 'bg-black text-white' : 'bg-white text-black'
                          }`}
                          onClick={() => handleButtonClick3(slot.id)}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Calendar Section */}
      <section>
        {threeAreSelected && (
          <div>
            <h4 className="text-lg font-bold text-left mt-8 ml-7">Select Date</h4>
            <div className="flex justify-center mt-4">
              <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
            <div className='text-center m-6'>
        <button onClick = {navigateToPage4}className='px-20 py-4 rounded-full  bg-blue-500 text-white text-center'>
            Proceed
        </button>
        </div>
          </div>
        )}
        </section>
    </div>
  );
};

export default Page;