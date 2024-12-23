import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = ({ type, text, icon, className, onclick }) => {

  const getByType = () => {
    if (type === "pill-fixed") {
      return (
        <button
        onClick={onclick}
        className={`absolute right-1 bg-black text-white px-4 py-3 rounded-full hover:font-semibold`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {icon ? <FontAwesomeIcon className="mr-2" icon={icon} /> : null}
        {text}
      </button>
      )
    }
    return (
      <button onClick={onclick} className={`bg-black text-white px-6 py-2 rounded-lg ${className}`}>
      Save
    </button>
    )
  }
  return getByType();
};

export default CustomButton;
