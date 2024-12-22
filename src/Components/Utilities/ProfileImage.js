import React from 'react';

const ProfileImage = ({ src, alt = 'Profile Image', width, height }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        className="w-12 h-12 rounded-full object-cover border border-border_color shadow-sm"
        style= {{ width: width, height: height }}
      />
    </div>
  );
};

export default ProfileImage;