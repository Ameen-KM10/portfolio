import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col items-end z-50">
      <div className="relative flex flex-row items-center py-6 pr-4 min-h-[300px] w-32 md:w-64">
        {/* Nav Items */}
        <div className="relative flex flex-row items-center w-full">
          <ul className="flex flex-col gap-4 w-full items-end relative">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className="w-full flex items-center justify-end relative"
                style={{ zIndex: 1 }}
              >
                <button
                  className={`w-full px-2 py-3 rounded-lg transition-all duration-200 focus:outline-none text-base md:text-lg font-medium text-amber-50 text-right ${
                    active === idx ? "scale-110 " : ""
                  }`}
                  aria-label={item.label}
                  onClick={() => setActive(idx)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
