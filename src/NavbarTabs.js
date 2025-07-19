import React from "react";
import Nav from 'react-bootstrap/Nav';

const NavbarTabs = ({ activeTab, onSelectTab }) => {
  return (
    <Nav
      variant="tabs"
      activeKey={activeTab}
      onSelect={onSelectTab}
      className="mb-4"
    >
      <Nav.Item>
        <Nav.Link eventKey="resume">Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="projects">Projects & Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="awards">Leadership & Awards</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about">About Me</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavbarTabs;
