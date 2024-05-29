import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <p className="border-4 border-[#F6F7F8] rounded-full w-20 h-16 animate-spin"></p>
    </div>
  );
};

export default Loader;
