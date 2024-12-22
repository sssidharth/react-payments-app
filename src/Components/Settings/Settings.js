import React, { useState, useEffect } from "react";
import CustomTabs from "../Utilities/CustomTabs";
import CustomCard from "../Utilities/CustomCard";
import SettingInputs from "./SettingInputs";
import ProfilePic from '../../Assets/pexels-christina-morillo-1181690 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const [formInputs, setFormInputs] = useState({
    firstName: {
      value: "",
      isValid: true,
    },
    lastName: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
    dateOfBirth: {
      value: "",
      isValid: true,
    },
    presentAddress: {
      value: "",
      isValid: true,
    },
    permanentAddress: {
      value: "",
      isValid: true,
    },
    city: {
      value: "",
      isValid: true,
    },
    postalCode: {
      value: "",
      isValid: true,
    },
    country: {
      value: "",
      isValid: true,
    },
  });

  const [tabs, setTabs] = useState(["Edit Profile", "Preferences", "Security"]);
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const handleTabChange = (val) => {
    setActiveTab(val);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
     setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: {
        ...prevInputs[name],
        value: value
      }
     }))
  }

  return (
    <div className="inner-container h-[100vh] items-center">
      <CustomCard className="p-10 md:w-4/5 mt-7 min-h-4/5">
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between mt-10">
            <div className="relative mb-4 md:mb-0">
              <img
                src={ProfilePic} // Replace with actual profile picture URL
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-black text-white p-1 rounded-full text-sm">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          <SettingInputs handleInputChange={handleInputChange} formInputs={formInputs} />
        </div>
        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-black text-white px-6 py-2 md:w-64 w-full rounded-lg">
            Save
          </button>
        </div>
      </CustomCard>
    </div>
  );
};

export default Settings;
