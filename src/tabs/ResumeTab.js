import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "../assets/me.png";
import { FaCode, FaDatabase, FaGlobe, FaBriefcase, FaGraduationCap, FaTrophy, FaUserTie } from "react-icons/fa";

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



const SkillBadge = ({ icon, title, skills, delay }) => (
  <Reveal direction="up" delay={delay}>
    <div className="glass-card h-100 p-4 text-center">
      <div className="display-4 text-gradient mb-3">
        {icon}
      </div>
      <h5 className="fw-bold mb-3">{title}</h5>
      <p className="text-muted-glass mb-0">{skills}</p>
    </div>
  </Reveal>
);

const ResumeApp = () => {

  return (
    <main className="overflow-hidden" style={{ minHeight: '100vh', background: 'transparent' }}>

      {/* -------------------- Hero Chapter -------------------- */}
      <section className="py-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-5 text-center text-lg-end mb-5 mb-lg-0 pe-lg-5">
              <Reveal direction="right">
                <img
                  src={me}
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{ maxWidth: "350px", width: "100%", height: "auto", objectFit: "cover", border: "4px solid rgba(0,0,0,0.05)" }}
                />
              </Reveal>
            </div>
            <div className="col-lg-7 text-center text-lg-start ps-lg-4">
              <Reveal direction="left" delay={0.2}>
                <p className="fw-bold tracking-wide text-uppercase mb-2 text-gradient-teal">Hello, I'm</p>
                <h1 className="display-3 fw-bolder mb-3 text-gradient">Mr. Nattapol Prairuenrom</h1>
                <h3 className="h4 text-muted-glass mb-4">Aspiring Software Developer</h3>
                <p className="lead text-muted-glass mb-4" style={{ maxWidth: '600px', margin: '0 auto', marginInlineStart: 'lg-0' }}>
                  A Fourth-year Computer Engineering student at Kasetsart University. Passionate about turning complex problems into elegant, logical solutions. Eager to bring my skills to a professional engineering team.
                </p>
                <button
                  className="btn btn-gradient mt-2"
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
      <section id="story-starts-here" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <Reveal direction="up">
                <FaUserTie className="display-4 text-gradient-teal mb-3" />
                <h2 className="fw-bold mb-4">Career Objective</h2>
                <div className="glass-card p-4">
                  <p className="fs-5 text-muted-glass lh-lg mb-0 text-dark">
                    Interested in a <strong className="text-dark">Software Development</strong> position to apply my skills in <strong className="text-dark">Python</strong>, <strong className="text-dark">C#</strong>, <strong className="text-dark">C++</strong>, <strong className="text-dark">Java</strong>, and <strong className="text-dark">JavaScript</strong>, develop and enhance software, and have a passion for Machine Learning and AI, and collaborate with a professional engineering team to gain valuable professional experience
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* -------------------- Chapter 3: Skills -------------------- */}
      <section className="py-5">
        <div className="container py-5">
          <Reveal direction="up">
            <div className="text-center mb-5">
              <FaCode className="display-4 text-gradient-teal mb-3" />
              <h2 className="fw-bold">Technical Arsenal</h2>
              <p className="text-muted-glass">Tools and technologies I use to build things</p>
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



    </main>
  );
};

export default ResumeApp;
