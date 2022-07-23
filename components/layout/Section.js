import React from "react";

const Section = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`flex-1 w-full max-w-5xl p-5 py-10 mx-auto md:py-16 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
