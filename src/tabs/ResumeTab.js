import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "../assets/me.png";
import { FaCode, FaDatabase, FaGlobe, FaBriefcase, FaGraduationCap, FaTrophy, FaUserTie } from "react-icons/fa";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";
import { useState } from "react";

/** ปุ่มลิงก์แบบเปิดแท็บใหม่ ใช้ซ้ำได้ */
const LinkButton = ({ href, children, variant = "outline-primary", size = "sm", className = "me-2 mt-2" }) => (
  <Button
    variant={variant}
    size={size}
    className={className}
    onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

const TimelineItem = ({ title, date, subtitle, children }) => {
  return (
    <Reveal direction="up">
      <div className="mb-5">
        {/* Interactive Card */}
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 rounded-4 shadow-sm border position-relative"
        >
          <h4 className="fw-bold mb-1 text-dark">{title}</h4>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
            <h6 className="mb-0 fw-semibold text-primary">{subtitle}</h6>
            <small className="fw-bold text-muted mt-2 mt-md-0 bg-light px-3 py-1 rounded-pill" style={{ fontSize: '0.85rem' }}>{date}</small>
          </div>
          <div className="text-secondary">
            {children}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

const SkillBadge = ({ icon, title, skills, delay }) => (
  <Reveal direction="up" delay={delay}>
    <Card className="h-100 border-0 shadow-sm rounded-4">
      <Card.Body className="p-4 text-center">
        <div className="display-4 text-primary mb-3">
          {icon}
        </div>
        <h5 className="fw-bold mb-3">{title}</h5>
        <p className="text-muted mb-0">{skills}</p>
      </Card.Body>
    </Card>
  </Reveal>
);

const ResumeApp = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <main className="bg-light text-dark overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* -------------------- Hero Chapter -------------------- */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' }}>
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-5 text-center text-lg-end mb-5 mb-lg-0 pe-lg-5">
              <Reveal direction="right">
                <img
                  src={me}
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{ maxWidth: "350px", width: "100%", height: "auto", objectFit: "cover", border: "8px solid white" }}
                />
              </Reveal>
            </div>
            <div className="col-lg-7 text-center text-lg-start ps-lg-4">
              <Reveal direction="left" delay={0.2}>
                <p className="text-primary fw-bold tracking-wide text-uppercase mb-2">Hello, I'm</p>
                <h1 className="display-3 fw-bolder mb-3 text-dark">Mr. Nattapol Prairuenrom</h1>
                <h3 className="h4 text-secondary mb-4">Aspiring Software Developer</h3>
                <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto', marginInlineStart: 'lg-0' }}>
                  A Fourth-year Computer Engineering student at Kasetsart University. Passionate about turning complex problems into elegant, logical solutions. Eager to bring my skills to a professional engineering team.
                </p>
                <button
                  className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm mt-2"
                  onClick={() => document.getElementById("story-starts-here")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore My Journey ↓
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Chapter 1: Objective -------------------- */}
      <section id="story-starts-here" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <Reveal direction="up">
                <FaUserTie className="display-4 text-primary mb-3" />
                <h2 className="fw-bold mb-4">Career Objective</h2>
                <p className="fs-5 text-muted lh-lg">
                  Interested in a <strong>Software Development</strong> position to apply my skills in <strong>Python</strong>, <strong>C#</strong>, <strong>C++</strong>, and <strong>JavaScript</strong>, develop and enhance software, and have a passion for Machine Learning and AI, and collaborate with a professional engineering team to gain valuable professional experience
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* -------------------- Chapter 3: Skills -------------------- */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <Reveal direction="up">
            <div className="text-center mb-5">
              <FaCode className="display-4 text-primary mb-3" />
              <h2 className="fw-bold">Technical Arsenal</h2>
              <p className="text-muted">Tools and technologies I use to build things</p>
            </div>
          </Reveal>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <SkillBadge
                icon={<FaCode />} title="Languages"
                skills="C#, C++, Python, C, Java" delay={0}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <SkillBadge
                icon={<FaGlobe />} title="Web Dev"
                skills="HTML, CSS, JavaScript, React" delay={0.1}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <SkillBadge
                icon={<FaDatabase />} title="Databases"
                skills="MySQL, SQL Server, MongoDB" delay={0.2}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <SkillBadge
                icon={<FaBriefcase />} title="Tools & IoT"
                skills="Git, Node-RED, ESP32, Docker, Figma" delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Chapter 4: Experience & Projects -------------------- */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <Reveal direction="up">
            <div className="text-center mb-5">
              <FaBriefcase className="display-4 text-primary mb-3" />
              <h2 className="fw-bold">Experience</h2>
              <p className="text-muted">Where theory meets practice</p>
            </div>
          </Reveal>

          <div className="row justify-content-center">
            <div className="col-lg-10">

              <TimelineItem
                title="Cooperative Internship – Bangkok Bank"
                subtitle="Programmer Intern"
                date="Sep 2025 - Mar 2026"
              >
                <p>Gained hands-on experience in corporate software development, system design, and teamwork.</p>
                <div className="bg-white p-3 rounded border mb-3">
                  <strong>Project: Intern Attendance Tracking Management System</strong>
                  <ul className="mt-2 mb-0 ps-3">
                    <li>Developed following the full SDLC process, from requirement gathering to deployment.</li>
                    <li>Built a React and C# .NET MVC full-stack system using Layered Architecture.</li>
                    <li>Designed SQL Server database to manage complex attendance data and permissions.</li>
                  </ul>
                </div>
                {projects.find(p => p.title.includes("Cooperative Internship Experience"))?.imgs?.[0] && (
                  <div className="mb-3">
                    <img src={projects.find(p => p.title.includes("Cooperative Internship Experience")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded" style={{ height: "150px", objectFit: "cover", width: "100%" }} />
                  </div>
                )}
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="outline-primary" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Intern Attendance Tracking"))); }}>View Project</Button>
                  <Button variant="outline-secondary" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Cooperative Internship Experience"))); }}>View Experience</Button>
                </div>
              </TimelineItem>



              <TimelineItem
                title="India Internship – Vishwakarma University"
                subtitle="Computer Engineering Intern"
                date="Apr – Jun 2025"
              >
                <p>Collaborated cross-culturally and led a major security research initiative.</p>
                <div className="bg-white p-3 rounded border mb-3">
                  <strong>Research: Measurement of security headers and misconfiguration</strong>
                  <ul className="mt-2 text-muted ps-3 mb-0">
                    <li>Analyzed 1M+ HTTP headers with Python (httpx, asyncio) using OWASP standards.</li>
                    <li>Developed a Chrome extension in JavaScript for real-time analysis and AI recommendations (Flask, Gemini API).</li>
                    <li>Research paper under review at Security and Privacy Journal – Wiley.</li>
                  </ul>
                </div>
                {projects.find(p => p.title.includes("Vishwakarma University"))?.imgs?.[0] && (
                  <div className="mb-3">
                    <img src={projects.find(p => p.title.includes("Vishwakarma University")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded" style={{ height: "150px", objectFit: "cover", width: "100%" }} />
                  </div>
                )}
                <div className="d-flex flex-wrap gap-2">
                  <LinkButton href="https://drive.google.com/file/d/1OptBrqc3fXj129Rm5bRIIn9u7WpBC070/view?usp=sharing">Certificate</LinkButton>
                  <LinkButton href="https://github.com/Fourgame/check-headers-OWASP-extension.git">GitHub</LinkButton>
                  <Button variant="outline-primary" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Real World Websites"))); }}>View Project</Button>
                  <Button variant="outline-secondary" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Vishwakarma University"))); }}>View Experience</Button>
                </div>
              </TimelineItem>
              <TimelineItem
                title="Mahidol University Departmental Web Platform"
                subtitle="Freelance Web Developer"
                date="Nov 2025"
              >
                <ul className="mb-0 ps-3 pb-3">
                  <li>Developed the official platform for the Dept. of Health Education and Behavioral Sciences from scratch.</li>
                  <li>Engineered custom Python GUI tools for staff to update news and content independently.</li>
                </ul>
                {projects.find(p => p.title.includes("Mahidol University"))?.imgs?.[0] && (
                  <div className="mb-3">
                    <img src={projects.find(p => p.title.includes("Mahidol University")).imgs[0]} alt="Project Preview" className="img-thumbnail rounded" style={{ height: "150px", objectFit: "cover", width: "100%" }} />
                  </div>
                )}
                <div className="d-flex flex-wrap gap-2">
                  <LinkButton href="https://phhe.ph.mahidol.ac.th/">Website</LinkButton>
                  <Button variant="outline-primary" size="sm" className="mt-2" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Mahidol University"))); }}>View More</Button>
                </div>
              </TimelineItem>
              <TimelineItem
                title="Teaching Assistant (TA)"
                subtitle="Academic Assistant"
                date="2023 – 2024"
              >
                <div className="mb-2">
                  <strong className="text-dark">Course: Probability and Statistics</strong>
                  <ul className="mb-1 ps-3 text-muted">
                    <li>Assisted lecturer in preparing course materials, grading assignments, and tutoring students in probability theory, descriptive statistics, distributions, and hypothesis testing.</li>
                  </ul>
                </div>
                <div className="mb-0">
                  <strong className="text-dark">Course: Computer Programming</strong>
                  <ul className="mb-0 ps-3 text-muted">
                    <li>Provided technical guidance on C/C++ and Python programming, helped students debug code, explained algorithmic concepts, and supported lab sessions.</li>
                  </ul>
                </div>
              </TimelineItem>
              <TimelineItem
                title="Treasurer — Computer Engineering Department"
                subtitle="Student Committee"
                date="2022 – Present"
              >
                <ul className="mb-0 ps-3 text-muted">
                  <li>Managed and oversaw the financial expenditures for the department, ensuring efficient allocation and use of funds.</li>
                  <li>Coordinated sponsorships and negotiated with vendors to optimize cost efficiency for departmental events and academic projects.</li>
                  <li>Actively supported event organization, including workshops, competitions, and cross-cultural exchange programs, enhancing the department's engagement and visibility.</li>
                  <li>Collaborated with student leaders to align financial strategies with academic and extracurricular goals, fostering a culture of responsibility and leadership.</li>
                </ul>
              </TimelineItem>
            </div>
          </div>
        </div>
      </section>



      <ProjectModal project={selectedProject} onClose={handleClose} />

    </main>
  );
};

export default ResumeApp;
