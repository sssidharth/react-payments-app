import React, { memo } from "react";
import CustomInputs from "../Utilities/CustomInputs";

const SettingInputs = ({ formInputs, handleInputChange }) => {
    console.log('rendered')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-4/5 w-full">
      <div className="flex flex-col">
        <p className="card_header">First Name</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          name="firstName"
          placeholder="First Name"
          value={formInputs.firstName.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.firstName.isValid}
          errorMessage={formInputs.firstName.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Last Name</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          name="lastName"
          placeholder="Last Name"
          value={formInputs.lastName.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.lastName.isValid}
          errorMessage={formInputs.lastName.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Email</p>
        <CustomInputs
          type="rounded-normal"
          inputType="email"
          name="email"
          placeholder="Email"
          value={formInputs.email.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.email.isValid}
          errorMessage={formInputs.email.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Password</p>
        <CustomInputs
          type="rounded-normal"
          inputType="password"
          placeholder="Password"
          name="password"
          value={formInputs.password.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.password.isValid}
          errorMessage={formInputs.password.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Date Of Birth</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="Date of Birth"
          name="dateOfBirth"
          value={formInputs.dateOfBirth.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.dateOfBirth.isValid}
          errorMessage={formInputs.dateOfBirth.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Present Address</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="Present Address"
          name="presentAddress"
          value={formInputs.presentAddress.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.presentAddress.isValid}
          errorMessage={formInputs.presentAddress.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Permanent Address</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="Permanent Address"
          name="permanentAddress"
          value={formInputs.permanentAddress.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.permanentAddress.isValid}
          errorMessage={formInputs.permanentAddress.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">City</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="City"
          name="city"
          value={formInputs.city.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.city.isValid}
          errorMessage={formInputs.city.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Postal Code</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="Postal Code"
          name="postalCode"
          value={formInputs.postalCode.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.postalCode.isValid}
          errorMessage={formInputs.postalCode.errorMessage}
        />
      </div>
      <div className="flex flex-col">
        <p className="card_header">Country</p>
        <CustomInputs
          type="rounded-normal"
          inputType="text"
          placeholder="Country"
          name="country"
          value={formInputs.country.value}
          onChange={(e) => handleInputChange(e)}
          className="md:w-[23vw] w-full"
          isValid={formInputs.country.isValid}
          errorMessage={formInputs.country.errorMessage}
        />
      </div>
    </div>
  );
};

export default memo(SettingInputs);
