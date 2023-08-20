import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { ETRLogo } from "./ETRLogo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Function to close the mobile menu
    const closeMobileMenu = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMobileMenu);
    window.addEventListener("resize", closeMobileMenu)

    return () => {
      document.removeEventListener("click", closeMobileMenu);
      window.removeEventListener("resize", closeMobileMenu)
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuClick = (e) => {
    e.stopPropagation();
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-zinc-50 relative" onClick={handleMobileMenuClick}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <ETRLogo />
        </Link>
        <div className="gap-5 mx-5 hidden sm:flex">
          <NavItem path="/about" label="What We Do" />
          <NavItem path="/portfolio" label="Our Work" />
          <NavItem path="/contact" label="Contact Us" />
        </div>
        <div className="sm:hidden p-4">
          <button
            className="text-zinc-700 w-20 h-20 relative focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block rounded-sm absolute h-1 w-10 bg-current transform transition duration-500 ease-in-out ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-2.5"
                }`}
              ></span>
              <span
                className={`block rounded-sm absolute h-1 w-10 bg-current transform transition duration-500 ease-in-out ${
                  mobileMenuOpen && "opacity-0"
                }`}
              ></span>
              <span
                className={`block rounded-sm absolute h-1 w-10 bg-current transform transition duration-500 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-2.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%-1rem)] left-0 z-10 bg-zinc-50 w-screen">
          <div className="flex flex-col gap-2 p-4 w-max ">
            <NavItem path="/about" label="What We Do" />
            <NavItem path="/portfolio" label="Our Work" />
            <NavItem path="/contact" label="Contact Us" />
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ path, label }) => {
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    setIsCurrent(window.location.pathname.includes(path));
  }, [path]);

  return (
    <Link
      to={path}
      className={`p-1 text-lg text-zinc-800 ${
        isCurrent ? "border-b-2" : ""
      } hover:text-zinc-400`}
    >
      {label}
    </Link>
  );
};

export default Header;
