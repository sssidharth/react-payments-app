import React from "react";
import ChipIconWhite from '../../Assets/Chip_Card_white.png';
import ChipIconDark from '../../Assets/Chip_Card_black.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

const CreditCard = ({ data, index, className }) => {
  const isOdd = index % 2 === 0; // Check if the index is even (alternates the style)

  const oddStyle =
    "bg-gradient-to-r from-gray-600 to-black text-white"; // Dark card styles
  const evenStyle = "bg-white border border-gray-300 text-gray-800"; // Light card styles

  return (
    <div
      className={`${className} rounded-2xl min-w-[320px] h-60 flex flex-col justify-between shadow-md ${isOdd ? oddStyle : evenStyle}`}
    >
      {/* Balance Section */}
      <div className="flex justify-between items-center mb-4 p-4">
        <div>
          <p className={`text-sm ${isOdd ? "text-gray-300" : "text-gray-600"}`}>
            Balance
          </p>
          <p className="text-2xl font-bold">${data.balance}</p>
        </div>
        <div>
          {/* Example chip icon */}
          <img
            src={`${isOdd ? ChipIconWhite : ChipIconDark}`}
            alt={`${isOdd ? 'blackChip' : 'whiteChip'}`}
            className={`w-10`}
          ></img>
        </div>
      </div>

      {/* Card Holder and Expiry */}
      <div className="flex justify-start items-center text-xs uppercase mb-4 p-4">
        <div className="mr-20">
          <p
            className={`font-semibold ${
              isOdd ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Card Holder
          </p>
          <p className="font-bold">{data.cardHolderName}</p>
        </div>
        <div>
          <p
            className={`font-semibold ${
              isOdd ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Valid Thru
          </p>
          <p className="font-bold">{data.validThru}</p>
        </div>
      </div>

      {/* Card Number */}
      <div 
        className={`flex justify-between text-lg p-4 pt-4 rounded-b-2xl font-semibold ${isOdd ? 'bg-gradient-to-r from-gray-500 to-gray-800 text-white' : 'border-t-2 border-border_color'}`}
      >
        <p className={`${isOdd ? "" : "text-gray-600"}`}>
          {data.cardNumber}
        </p>
        <FontAwesomeIcon className="w-8 h-8" icon={faCcMastercard}/>
      </div>
    </div>
  );
};

export default CreditCard;
