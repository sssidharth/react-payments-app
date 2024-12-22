import React from "react";

const CustomInputs = ({
  type,
  inputType,
  name,
  placeholder,
  onChange,
  icon,
  value,
  className,
  isValid = true,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col">
    <div
      className={`flex items-center bg-slate-100 border h-12 ${isValid ? 'border-gray-300' : 'border-red-500'} ${
        type.indexOf("pill") !== -1 ? "rounded-full" : "rounded-xl"
      } px-4 py-2 ${className}`}
    >
      {/* Leading Icon */}
      {icon && <span className="h-5 w-5 text-gray-400">{icon}</span>}

      {/* Input Field */}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        style={{
          borderTopRightRadius: type === "left-pill" ? "1.5rem" : null,
          borderBottomRightRadius: type === "left-pill" ? "1.5rem" : null,
        }}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none flex-1 px-2 text-gray-700 placeholder-gray-400"
      />
    </div>
          {/* Error Message */}
          {!isValid && (
            <span className="text-red-500 text-sm mt-1">
              {errorMessage}
            </span>
          )}
    </div>
  );
};

export default CustomInputs;
