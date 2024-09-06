import React from "react";

const Popup = ({ children, content }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-slate-700 dark:bg-slate-800 dark:bg-opacity-50 bg-opacity-50 justify-center items-center fixed top-0 left-0">
      <div className="p-5 dark:bg-darkHover dark:border dark:border-slate-400 dark:text-white bg-white rounded-md shadow-lg w-72 md:w-80">
        <h1 className="text-center mb-5 text-2xl text-pColor dark:text-white">
          {content ? content : "Add New Todo"}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Popup;
