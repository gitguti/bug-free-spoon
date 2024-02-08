import React from 'react';

const Button = ({ children, variant }) => {
  const handleClick = () => {
    // Redirige a la URL deseada
    window.location.href = 'https://betsell.io';
  };

  const buttonClasses = `rounded-lg text-sm lg:text-base 2xl:text-lg px-6 py-4 focus:outline-none transition transition-colors transition-opacity duration-300 ${
    variant === 'filled'
      ? 'bg-new-black hover:bg-new-black hover:opacity-75 text-white'
      : 'button-outlined text-new-black'
  }`;

  return <button className={buttonClasses}  onClick={handleClick}>{children}</button>;
};

export default Button;
