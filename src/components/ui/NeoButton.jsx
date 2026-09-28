const NeoButton = ({
  children,
  variant = "yellow",
  href,
  onClick,
  className = "",
  ...props
}) => {
  const variants = {
    yellow: "bg-neo-yellow",
    purple: "bg-neo-purple text-white",
    green: "bg-neo-green",
    white: "bg-neo-white",
    black: "bg-neo-black text-white",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    border-[3px]
    border-neo-black
    px-5
    py-3
    font-display
    font-bold
    shadow-[4px_4px_0_#000]
    transition-all
    duration-100
    hover:translate-x-[2px]
    hover:translate-y-[2px]
    hover:shadow-[2px_2px_0_#000]
    active:translate-x-[4px]
    active:translate-y-[4px]
    active:shadow-none
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeoButton;