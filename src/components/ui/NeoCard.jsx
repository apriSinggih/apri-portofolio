const NeoCard = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        border-[3px]
        border-neo-black
        bg-neo-white
        shadow-[5px_5px_0_#000]
        ${hover
          ? "transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1"
          : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default NeoCard;