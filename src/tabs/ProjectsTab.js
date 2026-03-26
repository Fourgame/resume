import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";
import { FaTrophy, FaCode } from "react-icons/fa";
import battle1 from "./DataTab/picture/codebattle/code1.png";
import NSO1 from "./DataTab/picture/NSO/NSO1.png";

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

const ProjectsTab = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (p) => setSelectedProject(p);
  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-5">
      <div className="container py-5 mt-5">
        <Reveal direction="up">
          <div className="text-center mb-5 mt-4">
            <FaCode className="display-4 text-gradient-teal mb-3" />
            <h2 className="fw-bold">Projects</h2>
            <p className="text-muted-glass">Where ideas come to life</p>
          </div>
        </Reveal>

        <div className="row">
          {projects
            .filter(p => !p.title.includes("Cooperative Internship Experience") && !p.title.includes("Vishwakarma University"))
            .map((p, i) => (
              <motion.div
                key={i}
                className="col-md-6 col-lg-4 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className="glass-card h-100 d-flex flex-column"
                  onClick={() => handleShow(p)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={p.imgs?.[0]}
                    alt={p.title}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h5 className="fw-bold mb-1">{p.title}</h5>
                    <p className="text-gradient-teal small mb-3">
                      {p.date}
                    </p>
                    <p className="text-muted-glass flex-grow-1">{p.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge rounded-pill" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>{p.tag}</span>
                      <Button variant="glass" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* -------------------- Awards -------------------- */}
      <section id="awards" className="py-5 mt-5">
        <div className="container py-4 px-4 glass-card">
          <Reveal direction="up">
            <div className="text-center mb-5 mt-4">
              <FaTrophy className="display-4 text-warning mb-3" style={{ filter: 'drop-shadow(0 0 10px rgba(255,193,7,0.5))' }} />
              <h2 className="fw-bold">Awards</h2>
              <p className="text-muted-glass">Extracurricular achievements and responsibilities</p>
            </div>
          </Reveal>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-10">
              <div className="row g-4">

                <div className="col-md-6">
                  <Reveal direction="up" delay={0}>
                    <div className="h-100 border-0 rounded-4 overflow-hidden" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <img
                        src={battle1}
                        alt="Code Battle"
                        className="w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="p-4">
                        <h5 className="fw-bold mb-1">Code Battle Contest 2025</h5>
                        <p className="text-gradient-teal fw-semibold mb-3">1st Runner-up & First Solve (Mar 2025)</p>
                        <p className="text-muted-glass mb-0">Placed 2nd in competitive programming; solved the hardest problem first under time constraints using C++.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="col-md-6">
                  <Reveal direction="up" delay={0.1}>
                    <div className="h-100 border-0 rounded-4 overflow-hidden" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <img
                        src={NSO1}
                        alt="NSO Data Camp"
                        className="w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="p-4">
                        <h5 className="fw-bold mb-1">NSO Data Camp</h5>
                        <p className="text-gradient-teal fw-semibold mb-3">Best Concept & Function Award (Mar 2025)</p>
                        <p className="text-muted-glass mb-0">Proposed a data-driven stingless beekeeping solution for sustainable tourism in Eastern Thailand.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={handleClose} 
        onNavigate={(title) => setTimeout(() => handleShow(projects.find(p => p.title.includes(title))), 300)}
      />
    </section>
  );
};

export default ProjectsTab;
