import React from "react";
import NavbarTabs from "./NavbarTabs";
import ResumeTab from "./tabs/ResumeTab";
import ProjectsTab from "./tabs/ProjectsTab";
import AwardsTab from "./tabs/AwardsTab";
import AboutTab from "./tabs/AboutTab";

function App() {
  
  return (
    <main className="min-vh-100 bg-light text-dark py-5 px-3">
      <div className="container">
        <NavbarTabs />

        <section id="resume">
          <ResumeTab />
        </section>

        <section id="projects" className="pt-3">
          <ProjectsTab />
        </section>

        <section id="awards" className="pt-3">
          <AwardsTab />
        </section>

        <section id="about" className="pt-3">
          <AboutTab />
        </section>

        <footer className="text-center text-muted small mt-5">
          © {new Date().getFullYear()} Nattapol Prairuenrom. Built with React + Bootstrap.
        </footer>
      </div>
    </main>
  );
}

export default App;
