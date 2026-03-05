import React from "react";
import NavbarTabs from "./NavbarTabs";
import ResumeTab from "./tabs/ResumeTab";
import ProjectsTab from "./tabs/ProjectsTab";
import AboutTab from "./tabs/AboutTab";

function App() {

  return (
    <main className="min-vh-100 bg-light text-dark pb-5">
      <NavbarTabs />

      <section id="resume">
        <ResumeTab />
      </section>

      <section id="projects">
        <ProjectsTab />
      </section>

      <section id="about">
        <AboutTab />
      </section>

      <footer className="text-center text-muted small mt-5">
        © {new Date().getFullYear()} Nattapol Prairuenrom. Built with React + Bootstrap.
      </footer>
    </main>
  );
}

export default App;
