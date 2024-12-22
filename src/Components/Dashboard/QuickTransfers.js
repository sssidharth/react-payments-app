import React, { useState } from 'react';
import ProfilePic from '../../Assets/pexels-christina-morillo-1181690 1.png';
import { faArrowRight, faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoundedIconButton from '../Utilities/RoundedIconButton';
import ProfileImage from '../Utilities/ProfileImage';
import CustomCard from '../Utilities/CustomCard';
import CustomInputs from '../Utilities/CustomInputs';
import CustomButton from '../Utilities/CustomButton';

const QuickTransfers = ({ profiles }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Number of profiles visible at a time
  
  const handleNext = () => {
    if (currentIndex + visibleCount < profiles.length) {
        setCurrentIndex(currentIndex + visibleCount);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex - visibleCount >= 0) {
        setCurrentIndex(currentIndex - visibleCount);
    }
  };

  const renderContent = () => {
    return (
    <div className='flex flex-col w-full justify-between h-full'>
     <div className="flex gap-4 overflow-hidden justify-between items-center w-full">
        {currentIndex === 0 ? null :  
        <RoundedIconButton 
           size="40px"
           onClick={handlePrev}
           icon={<FontAwesomeIcon className='h-5' icon={faArrowLeft}/>}
           className='bg-slate-100 border h-12 border-gray-300 text-gray-400'
       />}
       {profiles ? profiles.slice(currentIndex, currentIndex + visibleCount).map((profile, index) => (
         <div
           key={index}
           className="flex flex-col items-center w-18 text-center hover:font-semibold"
         >
           <ProfileImage src={ProfilePic} width={70} height={70} />
           <p className="mt-2">{profile.name}</p>
           <p className="text-sm text-light-gray-font">{profile.role}</p>
         </div>
       )) : null}
       <RoundedIconButton 
           size="40px"
           onClick={handleNext}
           icon={<FontAwesomeIcon className='h-5' icon={faArrowRight}/>}
           className='bg-slate-100 border h-12 border-gray-300 text-gray-400'
       />
     </div>
     <div className='flex items-center justify-between'>
      <p className='text-md text-light-gray-font'>Write Amount</p>
      <div className="flex items-center gap-0 relative">
      <CustomInputs type="left-pill" className="lg:w-80" placeholder="$ Amount" />
      <CustomButton text="Submit" type="fixed-pill" icon={faPaperPlane} />
      </div>
     </div>
    </div>
    );
  }
  return (
     <CustomCard
      children={renderContent()}
      className="h-80 flex justify-center items-center pt-10 pb-10"
     />
  )
}

export default QuickTransfers