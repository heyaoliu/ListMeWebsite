import cn from 'classnames';

const Button = ({ children, className, type = 'default' }) => {
  switch (type) {
    case 'primary':
      return (
        <div
          className={cn(
            'bg-purple rounded-full text-white px-4 py-1 cursor-pointer hover:opacity-90 transition-opacity duration-200 hidden sm:block',
            className,
          )}>
          {children}
        </div>
      );
    case 'small':
      return (
        <button
          type="button"
          className={cn(
            'border-2 md:w-24 w-28 rounded px-0.5 border-green-500 py-0.5 cursor-pointer hover:bg-green-500 transition-colors duration-200 my-10 focus:outline-none ',
            className,
          )}>
          Get in touch
        </button>
      );
    default: {
      return (
        <button
          type="button"
          className={cn(
            'focus:outline-none border-2 px-2 rounded-lg border-green-500 py-0.5 cursor-pointer hover:bg-green-500 transition-colors duration-200',
            className,
          )}>
          {children}
        </button>
      );
    }
  }
};

export default Button;
