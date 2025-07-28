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
      className={`bg-white shadow-sm py-2 sticky-top nav-wrapper ${
        showNavbar ? "show" : "hide"
      }`}
      style={{ zIndex: 1000, transition: "top 0.4s ease" }}
    >
      <div className="container d-flex justify-content-center gap-4 nav-tabs-big">
        <Link to="resume" spy smooth duration={500} className="nav-link fw-bold">
          Resume
        </Link>
        <Link to="projects" spy smooth duration={500} className="nav-link fw-bold">
          Projects
        </Link>
        <Link to="awards" spy smooth duration={500} className="nav-link fw-bold">
          Awards
        </Link>
        <Link to="about me" spy smooth duration={500} className="nav-link fw-bold">
          About
        </Link>
        <Link to="contact" spy smooth duration={500} className="nav-link fw-bold">
          contact
        </Link>
      </div>
    </div>
  );
};

export default NavbarTabs;
