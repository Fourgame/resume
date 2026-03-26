// NavbarTabs.js
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavbarTabs.css";

const NavbarTabs = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`nav-wrapper ${showNavbar ? "show" : "hide"
        }`}
    >
      <div className="d-flex justify-content-center w-100">
        <div className="nav-pill nav-tabs-big">
          <Link to="resume" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            Home
          </Link>
          <Link to="experience" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            Experience
          </Link>
          <Link to="projects" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            Projects
          </Link>
          <Link to="awards" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            Awards
          </Link>
          <Link to="about" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            About
          </Link>
          <Link to="contact" spy smooth duration={500} className="nav-link fw-bold" activeClass="active">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarTabs;
