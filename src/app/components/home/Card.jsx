import Button from "../ui/Button";

const Card = ({ title, backgroundImage, titleColor, delay, isVisible, content, button }) => {
    const animationClass = isVisible
    ? delay === 'left'
      ? 'md:animate-slideUp-delay-1'
      : 'md:animate-slideUp2'
    : '';
  const mobileAnimationClass = isVisible
    ? delay === 'left'
      ? 'animate-slide-left'
      : 'animate-slide-right'
    : '';

    const titleClasses = `absolute top-4 xl:top-[2.2rem] left-4 md:top-6 md:left-6 xl:left-[2.2rem] text-xl md:text-base lg:text-2xl xl:text-[2rem] xl:leading-[2.3rem] 3xl:text-[2.3rem] 3xl:leading-[2.9rem] 4xl:text-[2.9rem] 4xl:leading-[3.4rem] 2xl:p-8 w-4/5 lg:w-1/2 lg:w-2/3 xl:w-3/4 3xl:w-4/5 font-tomato font-medium ${titleColor}`;
    const contentClasses = `absolute font-regular top-20 lg:top-24 xl:top-28 3xl:top-36 4xl:top-40 left-4 md:left-6 xl:left-[2.2rem] text-sm md:leading-[22px] xl:text-base 3xl:text-xl  4xl:text-[1.75rem] 4xl:leading-[2.1rem] 2xl:p-8 w-3/4 lg:w-1/2 lg:w-2/3 xl:w-3/4 3xl:w-4/5 ${titleColor}`;
  
    return (
      <div className={`card lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative opacity-0 ${animationClass} ${mobileAnimationClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className={`${titleClasses}`}>{title}</p>
        <p className={`${contentClasses}`}>{content}</p>
        <div className="absolute left-4 md:left-6 xl:left-8 3xl:left-16 top-52 sm:top-44 md:top-56 3xl:top-[19rem] 4xl:top-96">
        {button ? <Button variant="filled" >Go to marketplace</Button>: ''}
        </div>

      </div>
    );
  };
  
  export default Card;
  