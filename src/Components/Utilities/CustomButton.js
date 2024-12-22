import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomButton = ({ type, text, icon }) => {
  return (
    <button
        className="absolute right-1 bg-black text-white px-4 py-3 rounded-full hover:font-semibold"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
      {icon ? <FontAwesomeIcon className='mr-2' icon={icon}/> : null}
        {text}
    </button>
  )
}

export default CustomButton