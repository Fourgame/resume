import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "../assets/me.png";
import { FaCode, FaDatabase, FaGlobe } from "react-icons/fa";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";
import { useState } from "react";

/** ปุ่มลิงก์แบบเปิดแท็บใหม่ ใช้ซ้ำได้ */
const LinkButton = ({ href, children, variant = "outline-primary", size = "sm", className = "me-2" }) => (
  <Button
    variant={variant}
    size={size}
    className={className}
    onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
  >
    {children}
  </Button>
);

const ResumeApp = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <main className="bg-light text-dark py-5">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-lg-4">
            <img
              src={me}
              alt="Profile"
              className="img-fluid rounded-circle border border-3 border-dark"
              style={{ maxWidth: "400px", width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col">
            <motion.h1
              className="display-5 fw-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Mr. Nattapol Prairuenrom
            </motion.h1>
            <motion.p
              className="lead mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Fourth-year Computer Engineering student at Kasetsart University, Sriracha Campus,
              passionate about <strong>Software Development</strong> and eager to apply knowledge on projects.
            </motion.p>
            <div className="mt-4 mb-3">
              <button
                className="btn-contact-pill"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-lg-4 py-4">
            {/* Career Objective */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Career Objective</strong>
                </Card.Title>
                <p className="mt-2 border-top pt-3">
                  Interested in <strong>Software Developer</strong> cooperative position to apply my skills in <strong>Python</strong>, <strong>C++</strong>, and 
                  <strong> JavaScript</strong>, develop and enhance software, and collaborate with a professional engineering team to gain
                  valuable professional experience.
                </p>
              </Card.Body>
            </Card>

            {/* Education */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Education</strong>
                </Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li><strong>2022 – Present : (GPA 2.93)</strong></li>
                  <li>Kasetsart University,</li>
                  <li>Sriracha Campus</li>
                  <li>Computer Engineering</li>
                  

                  <li className="border-top pt-3 mt-3"></li>
                  <li><strong>2016 – 2022 : (GPA 3.64)</strong></li>
                  <li>High School – Mathayomwatsing </li>
                  
                  <li>Sci-Math </li>
                </ul>
              </Card.Body>
            </Card>

            {/* Tech Skills */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Tech Skills</strong>
                </Card.Title>

                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li>
                    <strong>
                      <FaCode className="me-2" />
                      Programming Languages
                    </strong>
                  </li>
                  <li>Python, C++, C, Java</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaGlobe className="me-2" />
                      Web Development
                    </strong>
                  </li>
                  <li>HTML, CSS, JavaScript, React</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaDatabase className="me-2" />
                      Database Management
                    </strong>
                  </li>
                  <li>MySQL, SQL, MongoDB</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaCode className="me-2" />
                      Networking & Embedded Systems
                    </strong>
                  </li>
                  <li>ESP32, Node-RED, CiraCore, GNS3, Proteus, EasyEDA</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaCode className="me-2" />
                      Tools & Frameworks
                    </strong>
                  </li>
                  <li>Git, Figma, VS Code, Arduino, Postman</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Soft Skills */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Soft Skills</strong>
                </Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li>Problem Solving & Fast Learning</li>
                  <li>Teamwork & Communication</li>
                  <li>Adaptability & Time Management</li>
                  <li>Initiative & Responsibility</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Languages */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>
                  <strong>Languages</strong>
                </Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-2">
                  <li>Thai (Native)</li>
                  <li>English (Intermediate)</li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-8 py-4">
            {/* Projects & Experience */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Projects & Experience</strong>
                </Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li className="mb-4">
                    <strong>India Internship – Vishwakarma University, India</strong> (Apr – Jun 2025)
                    <br />
                    Internship in Computer Engineering; gained experience in software development, system design, and
                    cross-cultural teamwork. <br />
                    <em>Research: Measurement of security headers and misconfiguration on real-world websites.</em>
                    <br />
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://drive.google.com/file/d/1OptBrqc3fXj129Rm5bRIIn9u7WpBC070/view?usp=sharing">
                        Certificate
                      </LinkButton>

                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow(projects.find((p) => p.title.includes("Vishwakarma University")));
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </li>

                  <li className="mb-4">
                    <strong>Research: Measurement of Security Headers and Misconfiguration on Real World Websites</strong>{" "}
                    (Apr – Jun 2025)
                    <br />
                    Analyzed 1M+ HTTP headers with Python (httpx, asyncio, pandas) using OWASP standards. Developed a
                    Chrome extension (JavaScript) for real-time website analysis and AI recommendations (Python: Flask,
                    Gemini API). Study on large-scale HTTP security header analysis (under review, Security and Privacy
                    Journal – Wiley).
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://github.com/Fourgame/check-headers-OWASP-extension.git">
                        GitHub Repository
                      </LinkButton>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow(projects.find((p) => p.title.includes("Security Headers")));
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </li>

                  <li className="mb-4">
                    <strong>Automated Sidewalk Violation Detection</strong> (Oct 2024)
                    <br />
                    Designed an ESP32-based system (C++) integrated with Python (YOLOv3, Node-RED, CiraCore) to detect
                    motorcycles on sidewalks. Implemented real-time violation alerts via the LINE Messaging API, sending
                    image evidence to users.
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://drive.google.com/drive/folders/11-Q11yY_MasWuRxlSzFvocAcQ-ltynOk?usp=sharing">
                        Project Files (Google Drive)
                      </LinkButton>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow(projects.find((p) => p.title.includes("Sidewalk Violation")));
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </li>

                  <li className="mb-4">
                    <strong>Online Art Marketplace and Auction Platform</strong> (Feb 2025)
                    <br />
                    Created a web platform for buying, selling, and bidding on digital art with social features (profiles,
                    likes, comments). Built with React, Python, and MongoDB; integrated Azure Blob Storage for fast image
                    loading and Google OAuth/Email OTP for secure login.
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://github.com/Porramin-Boonnak/vivart">Frontend GitHub</LinkButton>
                      <LinkButton href="https://github.com/Porramin-Boonnak/se-back-normal">Backend GitHub</LinkButton>
                      <LinkButton href="https://www.figma.com/design/5ENc287NQlt4Zd9nuyvd9O/NEW-VEE?node-id=0-1&t=QMPKwXC7LBXQqpTB-1">
                        Figma Design
                      </LinkButton>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow(projects.find((p) => p.title.includes("Online Art Marketplace")));
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </li>

                  <li className="mb-4">
                    <strong>A Smart IoT System for Plant Growth Optimization</strong> (Mar 2025)
                    <br />
                    Built a Raspberry Pi–based IoT platform in Python/JavaScript with live video, AI disease detection,
                    and soil sensors (NPK, EC, pH). Automated irrigation, lighting, and fertilizer control via MQTT
                    relays, with port forwarding for smart farming and real-time web access.
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://github.com/Fourgame/Iot_Cannabis_Project">GitHub Repository</LinkButton>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShow(
                            projects.find((p) => p.title.includes("A Smart IoT System for Plant Growth Optimization"))
                          );
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  </li>

                  {/* Optional */}
                  <li className="mb-4">
                    <strong>Music Note Generation Project</strong> (Oct 2024)
                    <br />
                    Developed a music generation system using Python (TensorFlow/PyTorch) with RNN, LSTM, and Transformer architectures to produce sequences from given inputs.
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://github.com/Fourgame/Project_ML_generated_music">GitHub Repository</LinkButton>
                    </div>
                  </li>

                  <li className="mb-2">
                    <strong>KU Clap SRC – Course Recommendation Platform</strong> (Feb 2023)
                    <br />
                    React web app for course recommendations within the campus community.
                    <div className="mt-2 d-flex flex-wrap">
                      <LinkButton href="https://github.com/Fourgame/ku-clap-for-src-project">GitHub Repository</LinkButton>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <ProjectModal project={selectedProject} onClose={handleClose} />

            {/* Leadership & Awards */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>
                  <strong>Leadership & Awards</strong>
                </Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li className="mb-3">
                    <strong>NSO Data Camp — Best Concept & Function Award</strong> (Mar 2025)
                    <br />
                    Proposed a data-driven stingless beekeeping solution for sustainable tourism in Eastern Thailand.
                  </li>
                  <li className="mb-3">
                    <strong>Code Battle Contest 2025 — 1st Runner-up & First Solve</strong> (Mar 2025)
                    <br />
                    Placed 2nd in competitive programming; solved the hardest problem first (C++).
                  </li>
                  <li className="mb-3">
                    <strong>Treasurer, Computer Engineering Department</strong> (2022 – Present)
                    <br />
                    Managed department finances and oversaw fund allocation.
                  </li>
                  <li className="mb-3">
                    <strong>Teaching Assistant (TA)</strong> (2023 – 2024)
                    <br />
                    Probability and Statistics; Computer Programming — assisted in lectures, grading, and tutoring.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumeApp;
