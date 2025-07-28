import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata"; 

const ProjectsTab = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (p) => setSelectedProject(p);
  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects" className="">
      <motion.h2
        className="mb-4 fw-bold text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects & Experience
      </motion.h2>

      <div className="row">
        {projects.map((p, i) => (
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

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
};

export default ProjectsTab;
