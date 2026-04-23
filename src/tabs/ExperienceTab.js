import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBriefcase } from "react-icons/fa";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";

const LinkButton = ({ href, children, variant = "glass", size = "sm", className = "me-2 mt-2" }) => (
  <Button
    variant={variant}
    size={size}
    className={`btn-${variant} ${className}`}
    onClick={(e) => { e.stopPropagation(); window.open(href, "_blank", "noopener,noreferrer"); }}
  >
    {children}
  </Button>
);

const Reveal = ({ children, delay = 0, direction = "up", width = "100%" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0
    },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } }
  };
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const TimelineItem = ({ title, date, subtitle, children, onClick }) => {
  return (
    <Reveal direction="up">
      <div className="mb-5">
        {/* Interactive Card */}
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          transition={{ duration: 0.2 }}
          className="glass-card p-4 position-relative"
          onClick={onClick}
          style={onClick ? { cursor: 'pointer' } : {}}
        >
          <h4 className="fw-bold mb-1">{title}</h4>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
            <h6 className="mb-0 fw-semibold text-gradient-teal">{subtitle}</h6>
            <small className="fw-bold text-muted mt-2 mt-md-0 px-3 py-1 rounded-pill" style={{ fontSize: '0.85rem', background: 'rgba(0,0,0,0.05)' }}>{date}</small>
          </div>
          <div className="text-muted-glass">
            {children}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

const ExperienceTab = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <section className="py-5">
      <div className="container py-5">
        <Reveal direction="up">
          <div className="text-center mb-5 mt-4">
            <FaBriefcase className="display-4 text-gradient-teal mb-3" />
            <h2 className="fw-bold">Experience</h2>
            <p className="text-muted-glass">Where theory meets practice</p>
          </div>
        </Reveal>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <TimelineItem
              title="Programmer Cooperative – Bangkok Bank"
              subtitle="Programmer Intern"
              date="Nov 2025 - Mar 2026"
              onClick={() => handleShow(projects.find(p => p.title.includes("Cooperative Internship Experience")))}
            >
              <ul className="mb-2 ps-3 text-muted-glass">
                <li>Cooperative Internship in Programmer with ERM team gained experience in software development, system design, and teamwork.</li>
              </ul>
              <div className="p-3 rounded mb-3" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <strong className="text-dark">Project : Intern Attendance Tracking Management System</strong>
                <ul className="mt-2 mb-0 ps-3 text-muted-glass">
                  <li>Developed following the full SDLC process, from requirement gathering, system analysis, design, and successful deployment.</li>
                  <li>Built a React and C# .NET MVC full-stack system using Layered Architecture for scalability and maintainability.</li>
                  <li>Conducted requirement analysis, Database Design stored procedure using MSSQL Server to manage complex attendance data and user permissions effectively.</li>
                </ul>
              </div>
              {projects.find(p => p.title.includes("Cooperative Internship Experience"))?.imgs?.[0] && (
                <div className="mb-3">
                  <img src={projects.find(p => p.title.includes("Cooperative Internship Experience")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded border-0" style={{ height: "150px", objectFit: "cover", width: "100%", background: 'transparent' }} />
                </div>
              )}
              <div className="d-flex flex-wrap gap-2">
                <Button variant="glass" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(projects.find(p => p.title.includes("Intern Attendance Tracking"))); }}>View Project</Button>
                <Button variant="glass" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(projects.find(p => p.title.includes("Cooperative Internship Experience"))); }}>View More</Button>
              </div>
            </TimelineItem>

            <TimelineItem
              title="India Internship – Vishwakarma University"
              subtitle="Computer Engineering Intern"
              date="Apr – Jun 2025"
              onClick={() => handleShow(projects.find(p => p.title.includes("Vishwakarma University")))}
            >
              <p>Collaborated cross-culturally and led a major security research initiative.</p>
              <div className="p-3 rounded mb-3" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <strong className="text-dark">Research: Measurement of security headers and misconfiguration</strong>
                <ul className="mt-2 ps-3 mb-0 text-muted-glass">
                  <li>Analyzed 1M+ HTTP headers with Python (httpx, asyncio) using OWASP standards.</li>
                  <li>Developed a Chrome extension in JavaScript for real-time analysis and AI recommendations (Flask, Gemini API).</li>
                  <li>Research paper under review at Security and Privacy Journal – Wiley.</li>
                </ul>
              </div>
              {projects.find(p => p.title.includes("Vishwakarma University"))?.imgs?.[0] && (
                <div className="mb-3">
                  <img src={projects.find(p => p.title.includes("Vishwakarma University")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded border-0" style={{ height: "150px", objectFit: "cover", width: "100%", background: 'transparent' }} />
                </div>
              )}
              <div className="d-flex flex-wrap gap-2">
                <LinkButton href="https://drive.google.com/file/d/1OptBrqc3fXj129Rm5bRIIn9u7WpBC070/view?usp=sharing">Certificate</LinkButton>
                <LinkButton href="https://github.com/Fourgame/check-headers-OWASP-extension.git">GitHub</LinkButton>
                <Button variant="glass" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(projects.find(p => p.title.includes("Real World Websites"))); }}>View Project</Button>
                <Button variant="glass" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(projects.find(p => p.title.includes("Vishwakarma University"))); }}>View More</Button>
              </div>
            </TimelineItem>
            <TimelineItem
              title="Mahidol University Departmental Web Platform"
              subtitle="Freelance Web Developer"
              date="Nov 2025"
              onClick={() => handleShow(projects.find(p => p.title.includes("Mahidol University")))}
            >
              <ul className="mb-0 ps-3 pb-3 text-muted-glass">
                <li>Developed the official platform for the Dept. of Health Education and Behavioral Sciences from scratch.</li>
                <li>Engineered custom Python GUI tools for staff to update news and content independently.</li>
              </ul>
              {projects.find(p => p.title.includes("Mahidol University"))?.imgs?.[0] && (
                <div className="mb-3">
                  <img src={projects.find(p => p.title.includes("Mahidol University")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded border-0" style={{ height: "150px", objectFit: "cover", width: "100%", background: 'transparent' }} />
                </div>
              )}
              <div className="d-flex flex-wrap gap-2">
                <LinkButton href="https://phhe.ph.mahidol.ac.th/">Website</LinkButton>
                <Button variant="glass" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(projects.find(p => p.title.includes("Mahidol University"))); }}>View More</Button>
              </div>
            </TimelineItem>
            <TimelineItem
              title="Teaching Assistant (TA)"
              subtitle="Academic Assistant"
              date="2023 – 2024"
            >
              <div className="mb-2">
                <strong className="text-dark">Course: Probability and Statistics</strong>
                <ul className="mb-1 ps-3 text-muted-glass">
                  <li>Assisted lecturer in preparing course materials, grading assignments, and tutoring students in probability theory, descriptive statistics, distributions, and hypothesis testing.</li>
                </ul>
              </div>
              <div className="mb-0">
                <strong className="text-dark">Course: Computer Programming</strong>
                <ul className="mb-0 ps-3 text-muted-glass">
                  <li>Provided technical guidance on C/C++ and Python programming, helped students debug code, explained algorithmic concepts, and supported lab sessions.</li>
                </ul>
              </div>
            </TimelineItem>
            <TimelineItem
              title="Treasurer — Computer Engineering Department"
              subtitle="Student Committee"
              date="2022 – Present"
            >
              <ul className="mb-0 ps-3 text-muted-glass">
                <li>Managed and oversaw the financial expenditures for the department, ensuring efficient allocation and use of funds.</li>
                <li>Coordinated sponsorships and negotiated with vendors to optimize cost efficiency for departmental events and academic projects.</li>
                <li>Actively supported event organization, including workshops, competitions, and cross-cultural exchange programs, enhancing the department's engagement and visibility.</li>
                <li>Collaborated with student leaders to align financial strategies with academic and extracurricular goals, fostering a culture of responsibility and leadership.</li>
              </ul>
            </TimelineItem>
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={handleClose}
        onNavigate={(title) => setTimeout(() => handleShow(projects.find(p => p.title.includes(title))), 300)}
      />
    </section>
  );
};

export default ExperienceTab;
