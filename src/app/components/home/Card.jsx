const Card = ({ title, backgroundImage, titleColor, delay, isVisible }) => {
    const animationClass = isVisible ? (delay ? 'animate-slideUp-delay-1' : 'animate-slideUp2') : '';
  
    const titleClasses = `absolute top-4 xl:top-[2.2rem] left-4 md:top-6 md:left-6 xl:left-[2.2rem] text-xl md:text-base lg:text-2xl xl:text-[2rem] xl:leading-[2.3rem] 3xl:text-[2.3rem] 3xl:leading-[2.9rem] 4xl:text-[2.9rem] 4xl:leading-[3.4rem] 2xl:p-8 w-2/3 lg:w-1/2 lg:w-2/3 xl:w-3/4 3xl:w-4/5 font-tomato font-medium ${titleColor}`;
  
    return (
      <div className={`card lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative opacity-0 ${animationClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className={`${titleClasses}`}>{title}</p>
      </div>
    );
  };
  
  export default Card;
  