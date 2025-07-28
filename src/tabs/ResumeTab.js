
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "../assets/me.png";
import { FaCode, FaDatabase, FaGlobe } from "react-icons/fa";
import ProjectModal from "./DataTab/ProjectModal";
import projects from "./DataTab/Projectdata";
import { useState } from "react";





const ResumeApp = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <main className=" bg-light text-dark py-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-4">
            <img
              src={me}
              alt="Profile"
              className="img-fluid rounded-circle border border-3 border-dark"
              style={{
                maxWidth: '400px',
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />

          </div>
          <div className="col">
            <motion.h1
              className="display-5 fw-bold "
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Mr. Nattapol  Prairuenrom
            </motion.h1>
            <motion.p
              className="lead mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Computer Engineering student at Kasetsart University, Sriracha Campus, with a strong interest in programming and software development. Quick to learn, adaptable, and eager to apply knowledge in real-world projects.
            </motion.p>
              <div className="mt-4 mb-3">
                <button
                  className="btn-contact-pill"
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </button>
              </div>

          </div>
        </div>

        <div className="row" >
          {/* left Column */}
          <div className="col-4 py-4" >

            <Card className="mb-4">
              <Card.Body>
                <Card.Title><strong>Education</strong></Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li><strong>2022 – Present</strong> : <strong>(GPA 2.93)</strong></li>
                  <li>Computer Engineering, <br />Faculty of Engineering</li>
                  <li>Kasetsart University, <br />Sriracha Campus </li>
                  <li className="border-top pt-3 mt-3"><strong>2014 – 2022</strong> : <strong className="justifyContent-end">(GPA 3.64)</strong></li>
                  <li>High School – Mathayomwatsing </li>
                  <li className="border-top pt-3 mt-3"><strong>2010 – 2014</strong> : </li>
                  <li>Assumption College Tharnpanya</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title><strong>Tech Skill</strong></Card.Title>

                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li>
                    <strong>
                      <FaCode className="me-2" />
                      Programming Languages
                    </strong>
                  </li>
                  <li>Python, C, C++, Java</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaDatabase className="me-2" />
                      Database Management
                    </strong>
                  </li>
                  <li>MySQL, SQL, MongoDB</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaGlobe className="me-2" />
                      Web Development
                    </strong>
                  </li>
                  <li>HTML, CSS, JavaScript, React</li>
                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaCode className="me-2" />
                      Networking & Embedded Systems
                    </strong>
                  </li>
                  <li>GNS3, Proteus, EasyEDA, Node-RED, CiraCore</li>

                  <li className="border-top pt-3 mt-3">
                    <strong>
                      <FaCode className="me-2" />
                      Tool & Framework
                    </strong>
                  </li>
                  <li>Git, Figma, VS Code, Arduino, postman</li>
                  

                </ul>

              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title><strong>Soft Skills</strong></Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li>Problem Solving & Fast Learning</li>
                  <li>Teamwork & Communication</li>
                  <li>Adaptability & Time Management</li>
                  <li>Initiative & Responsibility</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Languages</Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-2">
                  <li>Thai Native</li>
                  <li>English</li>
                </ul>
              </Card.Body>
            </Card>

          </div>


          {/* Right Column */}
          <div className="col-8 py-4" >
            <Card className="mb-4">
              <Card.Body>
                <Card.Title><strong>Projects & Experience</strong></Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">

                  <li className="mb-4">
                    <strong>Summer Internship abroad – Vishwakarma University, India</strong> (Apr–Jun 2025)<br />
                    Completed a cross-cultural internship in the Computer Engineering Department. Worked on E-commerce systems and participated in software design activities as part of an international team.<br />
                    <a href="https://drive.google.com/file/d/1OptBrqc3fXj129Rm5bRIIn9u7WpBC070/view?usp=sharing" target="_blank" rel="noopener noreferrer">Certificate</a> |{" "}
                    <button type="button" className="btn btn-link p-0" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Vishwakarma University"))); }}>View More</button>
                  </li>

                  <li className="mb-4">
                    <strong>Research: Measurement of Security Headers and Misconfiguration on Real World Websites</strong> (2025)<br />
                    Conducted a large-scale analysis on HTTP security headers of 1 million websites...<br />
                    <a href="https://github.com/Fourgame/check-headers-OWASP-extension.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a> |{" "}
                    <button type="button" className="btn btn-link p-0" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Security Headers"))); }}>View More</button>
                  </li>

                  <li className="mb-4">
                    <strong>Online Art Marketplace and Auction Platform</strong> (Feb 2025)<br />
                    Developed a React-based E-commerce platform for buying and auctioning digital artworks...<br />
                    <a href="https://github.com/Porramin-Boonnak/vivart" target="_blank" rel="noopener noreferrer">Frontend GitHub</a> |{" "}
                    <a href="https://github.com/Porramin-Boonnak/se-back-normal" target="_blank" rel="noopener noreferrer">Backend GitHub</a> |{" "}
                    <a href="https://www.figma.com/design/5ENc287NQlt4Zd9nuyvd9O/NEW-VEE?node-id=0-1&t=QMPKwXC7LBXQqpTB-1" target="_blank" rel="noopener noreferrer">Figma Design</a> |{" "}
                    <button type="button" className="btn btn-link p-0" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Online Art Marketplace"))); }}>View More</button>
                  </li>

                  <li className="mb-4">
                    <strong>A Smart IoT System for Plant Growth Optimization</strong> (Feb 2025)<br />
                    Designed an IoT system for smart Plant farming with real-time monitoring...<br />
                    <a href="https://github.com/Fourgame/Iot_Cannabis_Project" target="_blank" rel="noopener noreferrer">GitHub Repository</a> |{" "}
                    <button type="button" className="btn btn-link p-0" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("A Smart IoT System for Plant Growth Optimization"))); }}>View More</button>
                  </li>

                  <li className="mb-4">
                    <strong>Automated Sidewalk Violation Detection via ESP32 and License Plate Recognition</strong> (Oct 2024)<br />
                    Developed an ALPR system using ESP32-CAM and YOLOv3 to detect sidewalk violations...<br />
                    <a href="https://drive.google.com/drive/folders/11-Q11yY_MasWuRxlSzFvocAcQ-ltynOk?usp=sharing" target="_blank" rel="noopener noreferrer">Project Files (Google Drive)</a> |{" "}
                    <button type="button" className="btn btn-link p-0" onClick={(e) => { e.preventDefault(); handleShow(projects.find(p => p.title.includes("Sidewalk Violation"))); }}>View More</button>
                  </li>

                  <li className="mb-4">
                    <strong>Music Note Generation Project</strong> (Oct 2024)<br />
                    Used LSTM to generate creative audio pitches and realistic tone variations...<br />
                    <a href="https://github.com/Fourgame/Project_ML_generated_music" target="_blank" rel="noopener noreferrer">GitHub Repository</a> 
                  </li>

                  <li className="mb-4">
                    <strong>KU Clap SRC – Course Recommendation Platform</strong> (Feb 2023)<br />
                    Created a React web app for course recommendations within the campus community.<br />
                    <a href="https://github.com/Fourgame/ku-clap-for-src-project" target="_blank" rel="noopener noreferrer">GitHub Repository</a> 
                  </li>

                </ul>
              </Card.Body>
            </Card>

            <ProjectModal project={selectedProject} onClose={handleClose} />



            <Card className="mb-4">
              <Card.Body>
                <Card.Title><strong>Leadership & Awards</strong></Card.Title>
                <ul className="list-unstyled mt-3 border-top pt-3">
                  <li className="mb-3">
                    <strong>NSO Data Camp 2025 – Best Concept & Function</strong><br />
                    Awarded for an innovative project utilizing statistical data analysis and interactive design during the National Statistical Office’s data competition.
                  </li>
                  <li className="mb-3">
                    <strong>Code Battle 2025 – 1st Runner-up & First Solve</strong><br />
                    Placed second overall and earned “First Solve” for being the first team to solve the hardest problem. Competition primarily used C++.
                  </li>
                  <li className="mb-3">
                    <strong>Treasurer, Computer Engineering Dept.</strong> (2022–Present)<br />
                    Managed departmental budget and coordinated events and communications between students and faculty.
                  </li>
                  <li className="mb-3">
                    <strong>Teaching Assistant</strong> (2023–2024)<br />
                    Assisted in two subjects: Probability & Statistics and Computer Programming. Provided tutoring and grading support for undergraduate students.
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
