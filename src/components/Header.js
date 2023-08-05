import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/" className="d-flex">
            <StaticImage src="..content/images/etrLogo.png" alt="etr-logo" width={60} />
            <span className="p-2">MEDIA PRODUCTIONS</span>
          </Link>
          <div>
            <div className="ms-auto">
              <Link to="/">
                Home
              </Link>
              <Link to="/services">
                Services
              </Link>
              <Link to="/portfolio">
                Our Work
              </Link>
              <Link to="/about">
                About ETR
              </Link>
              <Link to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
