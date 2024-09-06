import React from "react";

const Button = ({ className, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} text-xl px-3 py-1 rounded duration-200`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
