import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData, modifyProfileData } from "../../store/actions/actions";
import CustomTabs from "../Utilities/CustomTabs";
import CustomCard from "../Utilities/CustomCard";
import ProfileImage from "../Utilities/ProfileImage";
import SettingInputs from "./SettingInputs";
import ProfilePic from '../../Assets/pexels-christina-morillo-1181690 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Utilities/CustomButton";

const initialState = {
  firstName: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  lastName: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  email: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  password: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  dateOfBirth: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  presentAddress: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  permanentAddress: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  city: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  postalCode: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
  country: {
    value: "",
    isValid: true,
    errorMessage: ""
  },
}

const Settings = () => {
  const dispatch = useDispatch();

  const [formInputs, setFormInputs] = useState(initialState);

  const tabs = ["Edit Profile", "Preferences", "Security"]
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const profileData = useSelector(state => state.dashboardReducer.profileData);

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch]);

  useEffect(() => {
    if (profileData && Object.keys(profileData).length > 0) {
    const updatedFormInputs = { ...formInputs };
    Object.keys(updatedFormInputs).forEach((input) => {
      updatedFormInputs[input].value = profileData[input]
    });
    setFormInputs(updatedFormInputs);
  }
  }, [profileData])


  const handleTabChange = (val) => {
    setActiveTab(val);
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
     ...prevInputs,
     [name]: {
       ...prevInputs[name],
       value: value
     }
    }))
  } ,[])

  const validateFormInputs = () => {
    let isFormValid = true;
  
    const updatedFormInputs = { ...formInputs };
  
    Object.keys(updatedFormInputs).forEach((input) => {
      const value = updatedFormInputs[input].value.trim();
  
      if (!value) {
        updatedFormInputs[input].isValid = false;
        updatedFormInputs[input].errorMessage = `${input} cannot be empty`;
        isFormValid = false;
      } else {
        updatedFormInputs[input].isValid = true;
        updatedFormInputs[input].errorMessage = "";
        
        // Specific validation for email
        if (input === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            updatedFormInputs[input].isValid = false;
            updatedFormInputs[input].errorMessage = "Invalid email format";
            isFormValid = false;
          }
        }
  
        // Specific validation for password
        if (input === "password") {
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, 1 letter, 1 number
          if (!passwordRegex.test(value)) {
            updatedFormInputs[input].isValid = false;
            updatedFormInputs[input].errorMessage = "Password must be at least 8 characters long and include at least one letter and one number";
            isFormValid = false;
          }
        }
      }
    });
  
    // Update the state with validation results
    setFormInputs(updatedFormInputs);
  
    return isFormValid;
  };

  const handleSubmit = (e) => {
    if (validateFormInputs(formInputs)) {
      const data = {};
      Object.keys(formInputs).forEach((input) => {
        data[input] = formInputs[input].value
      })
      dispatch(modifyProfileData(data));
    }
    e.preventDefault();
  }

  return (
    <div className="inner-container h-[100vh] items-center">
      <CustomCard className="p-12 md:w-4/5 mt-7 min-h-4/5">
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between mt-10">
            <div className="relative mb-4 md:mb-0">
              <ProfileImage
                src={ProfilePic} // Replace with actual profile picture URL
                alt="Profile"
                className="h-24 w-24 object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-black text-white p-1 rounded-full text-sm">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          <SettingInputs handleInputChange={handleInputChange} formInputs={formInputs} />
        </div>
        {/* Save Button */}
        <div className="mt-6 flex justify-end">
         <CustomButton onclick={handleSubmit} className="md:w-56 w-full mt-4" />
        </div>
      </CustomCard>
    </div>
  );
};

export default Settings;
