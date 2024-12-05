"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap,faCertificate,faUser,faSuitcase,faPlus,faHouse,faPhone} from '@fortawesome/free-solid-svg-icons';
import Testimonybox from './Testimonybox';
const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  const Testomonies = [
    '"I quickly found a therapist who specialized in my needs. The process was smooth and I’m feeling better already!”', 
    '“Got matched with a therapist fast. The support has been amazing and life-changing.”', 
    '“I found the right therapist for me in minutes. It’s been a great experience!”', 
    '“This service helped me find a therapist who truly listens. I feel more in control now.”', 
    '“My therapist helped me with relationship issues, and I’m feeling more confident.”', 
    '“The easy booking process made finding a therapist simple. Virtual sessions are a game changer.”'
  ];

  const names = ['Savio', 'Harsh', 'Nikhil', 'George', 'Anshul', 'Macky'];
  return (
    <div className="mt-8 md-4">
      {/* About Section */}
      <section>
        <h3 className="text-lg font-bold">About me</h3>
        <p className="text-gray-700 mt-2">
          Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through
          life’s challenges with empathy and expertise. With over 10 years of experience,
          I specialize in helping clients manage anxiety, depression, and relationship
          issues through personalized, evidence-based practices. 
          {isExpanded ? (
            <>
              I believe that healing is a journey, and I strive to create a safe, supportive, and non-judgmental space where clients can explore their thoughts, emotions, and behaviors. Whether you’re navigating through life transitions, dealing with past trauma, or looking to improve self-esteem and personal growth, I’m here to help guide you toward positive change.In addition to traditional talk therapy, I offer flexible therapy formats, including in-person sessions, phone consultations, and video calls, to ensure that therapy is accessible no matter your lifestyle. Together, we’ll work on setting realistic goals, building resilience, and cultivating healthier coping strategies that lead to long-term well-being.
            </>
          ) : (
            <span>In addition to my professional qualifications...</span>
          )}
          <button 
            onClick={toggleContent} 
            className="text-blue-500 ml-2 font-semibold">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </section>

      {/* Credentials Section */}
      <section className="mt-6">
        <h3 className="text-lg font-bold">Credentials</h3>
        <ul className="text-gray-700">
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
            Ph.D. in Clinical Psychology - Harvard University
          </li>
          <li className="flex items-center mb-2" >
            <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
            M.A. in Counseling - University of California, Berkeley
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faCertificate} className="mr-3" />
            Licensed Professional Counselor (LPC) - State of DEF
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faCertificate} className="mr-3" />
            Certified Cognitive Behavioral Therapist (CBT)
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            Member, American Psychological Association (APA)
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faSuitcase} className="mr-3" />
            10+ years of experience in individual and group therapy
          </li>
        </ul>
      </section>

      {/* Availability Section */}
      <section className="mt-6">
        <h3 className="text-lg font-bold">Available on</h3>
        <div className="flex space-x-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center w-40 h-40">
            <button className="w-12 h-12 bg-red-400 text-white flex items-center justify-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faHouse} className="w-6 h-6" />
            </button>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center w-40 h-40">
          <button className="w-12 h-12 bg-red-400 text-white flex items-center justify-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
            </button>
          </div>
        </div>
        <p className="text-gray-600 mt-3 ml-4 text-sm">In-Person Sessions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;video/voice call</p>
      </section> 
      <section className='mt-6'>
      <h3 className="text-lg font-bold py-4">I Offer Therapy For</h3>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Stress Management</p>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Relationship Skills</p>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Anxiety Reduction</p>
      <div>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Depression Relief</p>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Behavioural</p>
      <p className='bg-white text-black px-4 py-2 m-2 rounded-full inline-block border-2 border-blue-100'>Trauma Healing</p>
      </div>
      </section>
      <section className='mt-6'>
      <div className='grid grid-cols-2 gap-6'>
      <div>
      <h3 className="text-lg font-bold py-4">I Am From📍</h3>
      <h1>Chennai,India</h1>
      </div>
      <div>
      <h3 className="text-lg font-bold py-4">Languages</h3>
      <h1>English,Hindi</h1>
      </div>
      </div>
      </section>
      <section className='mt-6'>
        <h3 className="text-lg font-bold py-4">Client Testimonies</h3>
        <div className='grid grid-cols-3 gap-4'>
          {Testomonies.map((testimony,index)=>(
            <Testimonybox key={index} testimony={testimony} names={names[index]} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;