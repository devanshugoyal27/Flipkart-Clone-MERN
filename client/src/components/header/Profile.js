import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Profile = ({ data, setData }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOpen = () => {
    setShowOptions(!showOptions);
  };


  const logoutUser = () => {
    setData("");
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleOpen}
        className="cursor-pointer focus:outline-none"
      >
        {data}
      </button>

      {showOptions && (
        <div className="absolute mt-2">
          <div className="bg-white border border-gray-200 shadow-md rounded py-2 px-4">
            <div
              className="flex items-center cursor-pointer text-gray-700"
              onClick={logoutUser}
            >
              <AiOutlineLogout className="text-sm mr-1 " />
              <span className="text-sm">Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
