import React from "react";

const RoundedIconButton = ({
  icon, // Icon as JSX
  size = "50px", // Size of the button (height & width)
  padding = "10px", // Padding around the icon // Background color on hover
  onClick, // Click handler
  className = "", // Additional classes for customization
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full border transition-colors duration-200 hover:bg-slate-300 focus:outline-none ${className}`}
      style={{
        width: size,
        height: size,
        padding: padding,
      }}
    >
      {icon}
    </button>
  );
};

export default RoundedIconButton;
