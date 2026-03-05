import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";
import { FaTrophy } from "react-icons/fa";
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
      <div className="container">
        <motion.h2
          className="mb-4 fw-bold text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

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
                <Card
                  className="h-100 shadow-sm border-0 project-card"
                  onClick={() => handleShow(p)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={p.imgs?.[0]}
                    alt={p.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                      {p.date}
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1">{p.desc}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Badge bg="secondary">{p.tag}</Badge>
                      <Button variant="outline-primary" size="sm">
                        View
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>

      {/* -------------------- Awards -------------------- */}
      <section id="awards" className="py-5 mt-5 bg-white rounded-4 shadow-sm border border-light">
        <div className="container py-4 px-4">
          <Reveal direction="up">
            <div className="text-center mb-5">
              <FaTrophy className="display-4 text-warning mb-3" />
              <h2 className="fw-bold">Awards</h2>
              <p className="text-muted">Extracurricular achievements and responsibilities</p>
            </div>
          </Reveal>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">

                <div className="col-md-6">
                  <Reveal direction="up" delay={0}>
                    <Card className="h-100 border-0 bg-light rounded-4 overflow-hidden shadow-sm">
                      <Card.Img
                        variant="top"
                        src={battle1}
                        alt="Code Battle"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <Card.Body className="p-4">
                        <h5 className="fw-bold text-dark mb-1">Code Battle Contest 2025</h5>
                        <p className="text-primary fw-semibold mb-3">1st Runner-up & First Solve (Mar 2025)</p>
                        <p className="text-muted mb-0">Placed 2nd in competitive programming; solved the hardest problem first under time constraints using C++.</p>
                      </Card.Body>
                    </Card>
                  </Reveal>
                </div>

                <div className="col-md-6">
                  <Reveal direction="up" delay={0.1}>
                    <Card className="h-100 border-0 bg-light rounded-4 overflow-hidden shadow-sm">
                      <Card.Img
                        variant="top"
                        src={NSO1}
                        alt="NSO Data Camp"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <Card.Body className="p-4">
                        <h5 className="fw-bold text-dark mb-1">NSO Data Camp</h5>
                        <p className="text-primary fw-semibold mb-3">Best Concept & Function Award (Mar 2025)</p>
                        <p className="text-muted mb-0">Proposed a data-driven stingless beekeeping solution for sustainable tourism in Eastern Thailand.</p>
                      </Card.Body>
                    </Card>
                  </Reveal>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
};

export default ProjectsTab;
