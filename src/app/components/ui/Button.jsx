import React from 'react';

const Button = ({ children, variant, ariaLabel }) => {
  const handleClick = () => {
    // Redirige a la URL deseada
    window.location.href = 'https://betsell.io';
  };

  const buttonClasses = `rounded-lg text-sm lg:text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl px-6 py-4 2xl:px-7 4xl:px-8 2xl:py-4 3xl:py-5  4xl:py-6 focus:outline-none transition transition-colors transition-opacity duration-300 ${
    variant === 'filled'
      ? 'bg-new-black hover:bg-new-black md:hover:opacity-75 text-white'
      : 'button-outlined text-new-black'
  }`;

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      aria-label={ariaLabel || children}
    >
      {children}
    </button>
  );
};

export default Button;
