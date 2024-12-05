"use client";
import { useRouter } from "next/navigation";
import ProfileCard from './ProfileCard';
const Header = () => {
  const router = useRouter();
  const handlebooksession = () =>{
    router.push("/page2");
  };
  return (
    <div className="w-full h-full flex flex-col items-center text-white p-6">

      <button className="text-white text-lg font-semibold mb-6 self-start">&larr; Back</button>

      {/* Profile Card */}
      <div className="flex flex-col items-center mt-12">
        <ProfileCard />
      </div>
      <div className="flex items-center justify-center h-screen">
      <button onClick={handlebooksession} className="px-8 py-4 bg-white text-blue-500 font-bold rounded-full shadow-md hover:bg-blue-100 transition-all">
        Book session
      </button>
    </div>
    </div>
  );
};

export default Header;