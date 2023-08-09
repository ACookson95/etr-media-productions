import React from "react";
import { Link } from "gatsby";
import { ETRLogo } from "./ETRLogo";

const Header = () => {
  return (
    <div className="bg-zinc-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <ETRLogo />
        </Link>
        <div className="flex gap-5 mx-5">
          <NavItem path="/about" label="What We Do" />
          <NavItem path="/portfolio" label="Our Work" />
          <NavItem path="/contact" label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ path, label }) => {
  const isCurrent = window.location.pathname.includes(path)
  return (
    <Link to={path} className={`p-1 text-lg text-zinc-800 ${isCurrent ? "border-b-2" : ""} hover:text-zinc-400`}>
      {label}
    </Link>
  )
}

export default Header;
