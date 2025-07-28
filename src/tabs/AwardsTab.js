import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import battle1 from "./DataTab/picture/codebattle/code1.png";
import battle2 from "./DataTab/picture/codebattle/code2.png";
import NSO1 from "./DataTab/picture/NSO/NSO1.png";
import NSO2 from "./DataTab/picture/NSO/NSO2.png";
import NSO3 from "./DataTab/picture/NSO/NSO3.png";
import NSO4 from "./DataTab/picture/NSO/NSO4.png";

const AwardsTab = () => {
  return (
    <section id="awards" className="mt-5">
      <h2 className="mb-5 fw-bold">Leadership & Awards</h2>

      {/* 🟢 NSO Data Camp (Carousel + ข้อความขวา) */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Carousel interval={3000} controls indicators>
                {[NSO1, NSO2, NSO3, NSO4].map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      alt={`NSO Slide ${i + 1}`}
                      className="img-fluid rounded shadow-sm w-100"
                      style={{ maxHeight: "450px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-md-6">
              <Card.Title>NSO Data Camp — Top Award Winner: Best Concept & Function</Card.Title>
              <Card.Subtitle className="text-muted mb-2">March 2025 | National Statistical Office of Thailand (NSO)</Card.Subtitle>
              <Card.Text style={{}}>
                • Awarded Best Concept & Function for proposing a data-driven idea on stingless beekeeping in greenhouses to promote sustainable tourism and harvest support in Eastern Thailand.<br />
                • Focused on applying statistical analysis and designing efficient data-driven functions to address real-world needs.<br />
                • Gained hands-on experience in data analysis, teamwork, and professional-level presentation.
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* 🟢 Code Battle 2025 (ข้อความซ้าย / Carousel รูปขวา) */}
      <Card className="mb-5 shadow-sm">
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
              <Card.Title>Code Battle Contest 2025 — 1st Runner-up & First Solve Award</Card.Title>
              <Card.Subtitle className="text-muted mb-2">March 2025 | CyberGeek Club, Kasetsart University Sriracha Campus</Card.Subtitle>
              <Card.Text style={{ }}>
                • Achieved 1st Runner-up (The One Runner-up Award) in a competitive programming contest focused on algorithmic problem-solving.<br />
                • Earned the First Solve Award for being the first team to successfully solve the most challenging problem.<br />
                • Used C++ as the primary language to tackle time-constrained algorithmic tasks.
              </Card.Text>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <Carousel interval={3000} controls indicators>
                {[battle1, battle2].map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      alt={`Code Battle Slide ${i + 1}`}
                      className="img-fluid rounded shadow-sm w-100"
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div className="row">
        {/* 🟢 Treasurer (ซ้าย) */}
        <div className="col-md-6">
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>Treasurer — Computer Engineering Department</Card.Title>
              <Card.Subtitle className="text-muted mb-2">2022–Present</Card.Subtitle>
              <Card.Text style={{ }}>
                • Managed and oversaw the financial expenditures for the department, ensuring efficient allocation and use of funds.<br />
                • Actively supported event organization and cross-cultural academic activities.<br />
                • Coordinated sponsorships and negotiated with vendors to optimize cost efficiency for departmental events and academic projects.<br />
                • Actively supported event organization, including workshops, competitions, and cross-cultural exchange programs, enhancing the department's engagement and visibility.<br />
                • Collaborated with student leaders to align financial strategies with academic and extracurricular goals, fostering a culture of responsibility and leadership.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* 🟢 Teaching Assistant (ขวา) */}
        <div className="col-md-6">
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>Teaching Assistant (TA)</Card.Title>
              <Card.Subtitle className="text-muted mb-2">2023–2024</Card.Subtitle>
              <Card.Text style={{  }}>
                <strong>Course: Probability and Statistics</strong><br />
                • Assisted lecturer in preparing course materials, grading assignments, and tutoring students in probability theory, descriptive statistics, distributions, and hypothesis testing.<br /><br />
                <strong>Course: Computer Programming</strong><br />
                • Provided technical guidance on C/C++ and Python programming, helped students debug code, explained algorithmic concepts, and supported lab sessions.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default AwardsTab;
