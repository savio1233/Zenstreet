import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonybox = ({ testimony, names }) => {
  return (
    <div className="w-60 h-60 bg-slate-100 text-black rounded-lg shadow-xl">
      <div>
        <FaQuoteLeft size={50} className="text-blue-300" />
      </div>
      <div>
        <p className="text-sm italic">{testimony}</p>
        <p className="font-semibold text-lg mt-2 text-black">-{names}</p>
      </div>
    </div>
  );
};

export default Testimonybox;