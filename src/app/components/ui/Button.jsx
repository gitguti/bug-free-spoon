import React from 'react';

const Button = ({ children, variant }) => {
  const buttonClasses = `rounded-lg text-base xl:text-md 2xl:text-2xl px-6 py-3 2xl:py-4 2xl:px-8 focus:outline-none transition transition-colors transition-opacity duration-300 ${
    variant === 'filled'
      ? 'bg-new-black hover:bg-new-black hover:opacity-75 text-white'
      : 'button-outlined text-new-black'
  }`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
