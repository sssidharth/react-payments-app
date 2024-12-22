import React from 'react'

const CustomInputs = ({ type, inputType, placeholder, onChange, icon, value, className  }) => {
    return (
        <div
          className={`flex items-center bg-slate-100 border h-12 border-gray-300 ${type.indexOf('pill') !== -1 ? 'rounded-full' : 'rounded-xl'} px-4 py-2 ${className}`}
        >
          {/* Leading Icon */}
          {icon && <span className="h-5 w-5 text-gray-400">{icon}</span>}
    
          {/* Input Field */}
          <input
            type={inputType}
            placeholder={placeholder}
            style={{ borderTopRightRadius: type === 'left-pill' ? '1.5rem' : null, borderBottomRightRadius: type === 'left-pill' ? '1.5rem' : null}}
            value={value}
            onChange={onChange}
            className="bg-transparent outline-none flex-1 px-2 text-gray-700 placeholder-gray-400"
          />
        </div>
    );
}

export default CustomInputs