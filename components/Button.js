import React from "react";

const Button = ({children, href, ...props}) => {
  const className = `
    inline-flex items-center px-7 py-4 border border-transparent 
    text-base font-semibold rounded-full shadow-sm text-white 
    bg-gray-900 hover:bg-gray-800 focus:outline-none 
    focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
  `.trim();

  if (!href) {
    return <button className={className} {...props}>{children}</button>;
  }

    return <a href={href} className={className} {...props}>{children}</a>;
};

export default Button;
