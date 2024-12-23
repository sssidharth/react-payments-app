import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomInputs from '../Utilities/CustomInputs';
import RoundedIconButton from '../Utilities/RoundedIconButton';
import ProfilePic from '../../Assets/pexels-christina-morillo-1181690 1.png'
import { faSearch, faGear, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileImage from '../Utilities/ProfileImage';

const Topbar = ({ toggleSidebar }) => {

    const [searchText, setSearchText] = useState('');

    const currentPage = useSelector(state => state.dashboardReducer.currentPage);

  return (
    <div className='header_base'>

       {/* Mobile View */}
      <div className='md:hidden flex flex-col items-center justify-between w-full'>
      <div className='md:hidden flex flex-row items-center justify-between w-full'>
        <button
          onClick={toggleSidebar}
          className="text-gray-800 focus:outline-none"
        >
         <FontAwesomeIcon icon={faBars} /> 
        </button>
        <h1 className='text-xl font-bold ml-7'>
            {currentPage}
        </h1>
        <ProfileImage 
          className="w-12 h-12"
          src={ProfilePic}
        />
      </div>
      <CustomInputs 
          type="pill"
          inputType="text"
          placeholder="Search for something"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-full mt-5"
          icon={<FontAwesomeIcon icon={faSearch}/>}
        />
      </div>

        {/* Desktop View */}
        <div className='md:flex hidden flex-row justify-between items-center w-full'>
        <h1 className='text-xl font-bold'>
          {currentPage}
        </h1>
        <div className='flex flex-row justify-between items-center'>
        <CustomInputs 
          type="pill"
          inputType="text"
          placeholder="Search for something"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-56 mr-10"
          icon={<FontAwesomeIcon icon={faSearch}/>}
        />
        <RoundedIconButton 
          size="40px"
          icon={<FontAwesomeIcon className='h-5' icon={faGear}/>}
          className='bg-slate-100 border h-12 border-gray-300 text-gray-400 mr-10 md:block hidden'
        />
        <RoundedIconButton 
          size="40px"
          icon={<FontAwesomeIcon className='h-5' icon={faBell}/>}
          className='bg-slate-100 border h-12 border-gray-300 text-gray-400 mr-10 md:block hidden'
        />
        <ProfileImage 
          className="w-12 h-12"
          src={ProfilePic}
        />
        </div>
        </div>
    </div>
  )
}

export default Topbar;