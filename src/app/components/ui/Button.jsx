import React from 'react';

const Button = ({ children, variant }) => {
  const buttonClasses = `rounded-lg px-6 py-4 focus:outline-none transition transition-colors transition-opacity duration-300 ${
    variant === 'filled'
      ? 'bg-new-black hover:bg-new-black hover:opacity-75 text-white'
      : 'border border-blue-500 hover:bg-blue-100 text-blue-500'
  }`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
