const NeoBadge = ({
  children,
  variant = "green",
  className = "",
}) => {
  const variants = {
    green: "bg-neo-green",
    yellow: "bg-neo-yellow",
    purple: "bg-neo-purple text-white",
    pink: "bg-neo-pink",
    black: "bg-neo-black text-white",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        border-[2px]
        border-neo-black
        px-3
        py-1
        font-mono
        text-xs
        font-bold
        uppercase
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default NeoBadge;