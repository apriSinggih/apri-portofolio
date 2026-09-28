import { useState } from "react";
import { Menu, X } from "lucide-react";
import NeoBadge from "./ui/NeoBadge";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-neo-black bg-neo-bg">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="
            border-[3px]
            border-neo-black
            bg-neo-yellow
            px-3
            py-1
            font-display
            text-xl
            font-bold
            shadow-[3px_3px_0_#000]
            transition-all
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[1px_1px_0_#000]
          "
        >
          APRI.DEV
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  font-mono
                  text-sm
                  font-bold
                  uppercase
                  transition-all
                  hover:-translate-y-0.5
                  hover:underline
                  hover:decoration-[3px]
                  hover:underline-offset-4
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Availability */}
          <NeoBadge variant="green" className="gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neo-black opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neo-black" />
            </span>

            Available for Hire
          </NeoBadge>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="
            border-[3px]
            border-neo-black
            bg-neo-white
            p-2
            shadow-[3px_3px_0_#000]
            transition-all
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[1px_1px_0_#000]
            lg:hidden
          "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t-[3px] border-neo-black bg-neo-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="
                  border-b-2
                  border-neo-black
                  py-4
                  font-mono
                  text-sm
                  font-bold
                  uppercase
                  last:border-b-0
                "
              >
                {item.label}
              </a>
            ))}

            <div className="mt-5">
              <NeoBadge variant="green" className="gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neo-black opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neo-black" />
                </span>

                Available for Hire
              </NeoBadge>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;