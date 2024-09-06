import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto dark:bg-darkMode">
      <div className="py-8 px-4">{children}</div>
    </div>
  );
};

export default Layout;
