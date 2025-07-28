// src/components/ProjectModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Github } from "lucide-react";
import Carousel from 'react-bootstrap/Carousel';


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Modal show={true} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          
          {(project.imgs ?? []).map((imgSrc, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={imgSrc}
                alt={`Slide ${i + 1}`}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <p className="text-muted">{project.date}</p>
        <p style={{ whiteSpace: "pre-line" }}>{project.fullDesc || project.desc}</p>

      </Modal.Body>
        <Modal.Footer>
          {project.extraLinks?.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className="me-2">
                {link.label}
              </Button>
            </a>
          ))}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className="me-2">
                <Github size={18} className="me-2" />
                View on GitHub
              </Button>
            </a>
          )}
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
