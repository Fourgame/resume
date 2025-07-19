
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "./assets/me.png";
import NavbarTabs from "./NavbarTabs";
import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";

const ResumeApp = () => {
  const [activeTab, setActiveTab] = useState("resume");


  const projects = [
    {
      title: "Vivart – Online Art Marketplace Platform",
      date: "Feb 2025",
      desc: "Developed an E-commerce platform for buying and auctioning digital artworks using React. Implemented secure image masking, supported real-time bidding, and purchase history.",
    },
    {
      title: "Smart Cannabis Cultivation System – IoT & ML",
      date: "Feb 2025",
      desc: "Built an IoT system for cannabis farming with ML-based video health analysis. Monitored soil/environment via MongoDB and controlled 4 modules via web dashboard.",
    },
    {
      title: "License Plate Detection for Motorcycles – IoT & ML",
      date: "Oct 2024",
      desc: "ALPR system using ESP32-CAM and YOLOv3. Detected violations, sent LINE alerts via Cira Core API.",
    },
    {
      title: "Pitch Generation Project – Machine Learning",
      date: "Oct 2024",
      desc: "Used LSTM to generate starting pitch for audio. Demonstrated ML-based creative synthesis.",
    },
    {
      title: "KU Clap SRC – App Development",
      date: "Feb 2023",
      desc: "React platform for students to ask/share elective course recommendations.",
    },
    {
      title: "Giker Slide Game",
      date: "Feb 2023",
      desc: "Java game developed to demonstrate OOP principles and game development skills. ",
    },
    {
      title: "Research: Measurement of Security Headers in the Wild",
      date: "2025",
      desc: "Analyzed 1M sites for OWASP headers. Built browser extension with AI-driven header fixer.",
    },
    {
      title: "Summer Internship – Vishwakarma University, India",
      date: "Jun 2025",
      desc: "Collaborated in cross-cultural software team. Focused on E-commerce development & system design.",
    },
  ];

  const skills = [
    { label: "Programming", value: "Python, C, C++, Java" },
    { label: "Database", value: "MySQL, SQL, MongoDB" },
    { label: "Web Development", value: "HTML, CSS, JavaScript, React" },
    { label: "Machine Learning", value: "scikit-learn, TensorFlow, Kaggle" },
  ];

  return (
    <main className="min-vh-100 bg-light text-dark py-5 px-3">
      <div className="container ">
        <NavbarTabs activeTab={activeTab} onSelectTab={setActiveTab} />
        <div className="row">
          <div className="col-lg-4">
            <img
              src={me}
              alt="Profile"
              className="img-fluid rounded-circle border border-3 border-dark"
              style={{ Width: '250px', Height: '250px', objectFit: 'cover' }}
            />

          </div>
          <div className="col-lg-8">
            <motion.h1
              className="display-4 fw-bold  mt-5"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Mr. Nattapol Prairuenrom
            </motion.h1>
            <motion.p
              className="lead mt-4 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Computer Engineering student at Kasetsart University, Sriracha Campus, with a strong interest in programming and software development. Quick to learn, adaptable, and eager to apply knowledge in real-world projects.
            </motion.p>

            <div className="row d-flex align-items-stretch">
              <div className="col-5">
                <div className="h-100">
                  <Card.Body>
                    <Card.Title><strong>Contact</strong></Card.Title>
                    <ul className="list-unstyled">
                      <li><Mail size={30} className="me-2 " /> loukfour@gmail.com</li>
                      <li><Phone size={30} className="me-2" /> +66 95 250 5929</li>
                      <li><MapPin size={30} className="me-2" /> Chomthong, Bangkok</li>
                      <li><Github size={30} className="me-2" /> Fourgame</li>
                    </ul>
                  </Card.Body>
                </div>
              </div>

              <div className="col-7">
                <div className="h-100">
                  <Card.Body>
                    <Card.Title><strong>Education</strong></Card.Title>
                    <ul className="list-unstyled">
                      <li><strong>2022 – Present:</strong></li>
                      <li>Computer Engineering, Kasetsart University Sriracha (GPA 2.93)</li>
                      <li><strong>2014 – 2022:</strong></li>
                      <li>High School – Mathayomwatsing (GPA 3.64)</li>
                      <li><strong>2010 – 2014:</strong> </li>
                      <li>Assumption College Tharnpanya</li>
                    </ul>
                  </Card.Body>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col py-5 px-3" >


          <Card className="mb-4">
            <Card.Body >
              <Card.Title>Projects & Experience</Card.Title>
              {projects.map((p, i) => (
                <div key={i} className="mt-3 border-top pt-3">
                  <strong>{p.title}</strong>
                  <div className="text-muted small mb-1">{p.date}</div>
                  <div>{p.desc}</div>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Leadership & Awards</Card.Title>
              <ul className="list-unstyled">
                <li><strong>Treasurer, CE Dept.</strong> (2022–Present)</li>
                <li><strong>NSO Data Camp:</strong> Best Concept & Function (Mar 2025)</li>
                <li><strong>Code Battle 2025:</strong> 1st Runner-up & First Solve (Mar 2025)</li>
                <li><strong>Teaching Assistant:</strong> Probability & Statistics, Programming (2023–2024)</li>
              </ul>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
              <Card.Body>
                <Card.Title>Technical Skills</Card.Title>
                <ul className="list-unstyled">
                  {skills.map((s, i) => (
                    <li key={i}><strong>{s.label}:</strong> {s.value}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
        </div>
        


        <footer className="text-center text-muted small mt-5">
          © {new Date().getFullYear()} Nattapol Prairuenrom. Built with React + Bootstrap.
        </footer>
      </div>
    </main>

  );
};

export default ResumeApp;
