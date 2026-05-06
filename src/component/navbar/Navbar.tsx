import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { label: "Home", link:"/" },
  { label: "About", link:"/" },
  { label: "Portfolio", link:"Portfolio" },
  { label: "Why We Invest", link:"Market" },
  { label: "Our Teams", link:"Teams" },
  { label: "FlexAble", link:"FlexAble" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#1B3650]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <img src="/logo.png" alt="Logo" className="w-[55px] md:w-[65px]" />
        </div>

        {/* Desktop Menu (ONLY lg and above) */}
        <ul
          className={`hidden lg:flex items-center space-x-12 font-kantum transition
          ${scrolled ? "text-[#f3f4f5]" : "text-white"}
          `}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:opacity-70 transition duration-200 text-sm xl:text-base"
              >
                {/* Fix long text */}
                {item.label === "Why We Invest" ? (
                  <span className="leading-tight text-center inline-block">
                    Why We  Invest
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button
            className={`px-5 py-2 rounded-full font-kantum transition text-sm xl:text-base
            ${
              scrolled
                ? "bg-[#CEE4E1] text-[#335577] hover:bg-[#c7d3d1]"
                : "bg-white text-[#335577] hover:bg-gray-200"
            }`}
          >
            Investment Inquiries
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl transition
            ${scrolled ? "text-white" : "text-white"}
            `}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-lg px-6 py-10 z-[999] text-white flex flex-col">
          
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl self-end mb-10"
          >
            ✕
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-6 text-lg font-kantum text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-70 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="mt-10 bg-[#CEE4E1] text-[#335577] px-6 py-3 rounded-full text-sm w-fit mx-auto">
            Investment Inquiries
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;