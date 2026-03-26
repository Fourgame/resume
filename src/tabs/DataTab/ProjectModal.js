// src/components/ProjectModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Github } from "lucide-react";
import Carousel from 'react-bootstrap/Carousel';

const ProjectModal = ({ project, onClose, onNavigate }) => {
  if (!project) return null;

  return (
    <Modal show={true} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="rounded overflow-hidden mb-3" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
          <Carousel>
            {(project.imgs ?? []).map((imgSrc, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100 bg-light"
                  src={imgSrc}
                  alt={`Slide ${i + 1}`}
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <p className="text-gradient-teal fw-semibold">{project.date}</p>
        <p className="text-muted-glass text-dark" style={{ whiteSpace: "pre-line" }}>{project.fullDesc || project.desc}</p>

      </Modal.Body>
      <Modal.Footer>
        {project.relatedProject && (
          <Button variant="primary" className="me-2" onClick={() => { onClose(); if (onNavigate) onNavigate(project.relatedProject); }}>
            View Project
          </Button>
        )}
        {project.extraLinks?.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="outline-dark" className="me-2">
              {link.label}
            </Button>
          </a>
        ))}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="outline-dark" className="me-2">
              <Github size={18} className="me-2" />
              View on GitHub
            </Button>
          </a>
        )}
        <Button variant="outline-dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
