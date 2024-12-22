import React from "react";

const CustomTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-300">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-8 py-2 text-md font-medium ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
