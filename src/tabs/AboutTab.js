import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel"; 
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

import { FaFacebook, FaLine } from "react-icons/fa";


import me1 from "../assets/me2.png";
import me2 from "../assets/me3.png";
import me3 from "../assets/me4.png";

const AboutMe = () => {
    return (
        <section id="about" className="mt-5">
            <h2 className="mb-5 fw-bold">About Me</h2>

            {/* 🔹 Card About Me with Image Carousel */}
            <Card className="shadow-sm p-4 border-0">
                <Card.Body>
                    <div className="row align-items-center">
                        {/*  Carousel รูปทางซ้าย */}
                        <div className="col-md-5 mb-3 mb-md-0">
                            <Carousel interval={3000} controls indicators fade>
                                {[me1, me2, me3].map((img, i) => (
                                    <Carousel.Item key={i}>
                                        <div style={{ width: "100%", height: "430px", overflow: "hidden" }}>
                                            <img
                                                src={img}
                                                alt={`Profile Slide ${i + 1}`}
                                                className="w-100 h-100 rounded shadow-sm"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        {/*  ข้อความทางขวา */}
                        <div className="col-md-7">
                            <Card.Text style={{}}>
                                {/* 🔹 Education Card */}
                                <Card className="mt-1 ">
                                    <Card.Body>
                                        <Card.Title className="fw-bold">Education</Card.Title>
                                        <ul className="list-unstyled mt-1 border-top pt-1 mb-2">
                                            <li><strong>B.Eng. Computer Engineering</strong></li>
                                            <li>Faculty of Engineering, Kasetsart University Sriracha Campus</li>
                                            <li><em>(Expected Graduation: 2026)</em></li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <div className="mt-3">Hello! My name is <strong>Nattapol Prairuenrom</strong>, a Computer Engineering student at
                                    Kasetsart University, Sriracha Campus. I have a passion for programming,
                                    problem-solving, and building impactful software solutions.
                                    <br /><br />
                                    I enjoy working on real-world projects, contributing to open-source, and exploring
                                    new technologies. My expertise includes full-stack development with React, IoT
                                    systems, and AI/ML applications.
                                    <br /><br />
                                    In my free time, I love learning new programming languages, designing UI/UX, and
                                    participating in coding competitions to improve my skills.</div>



                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <h2 className="mb-5 mt-5 fw-bold">Contact</h2>
            {/* 🔹 Contact Card */}
            <Card className="mt-4 mb-4" id="contact">
                <Card.Body>

                    <div className="row align-items-center mt-4 mb-4">
                        {/* แผนที่ทางซ้าย */}
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                                <iframe
                                    title="My Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13038.064144397!2d100.43688945355485!3d13.703929544835635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2980630485459%3A0x35c879591bc95555!2z4Lia4Liy4LiH4LiC4Li44LiZ4LmA4LiX4Li14Lii4LiZIOC5geC4guC4p-C4h-C4muC4suC4h-C4guC4uOC4meC5gOC4l-C4teC4ouC4mSDguYDguILguJXguIjguK3guKHguJfguK3guIcg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMTUw!5e0!3m2!1sth!2sth!4v1753701974488!5m2!1sth!2sth"
                                    width="100%"
                                    height="300"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        {/* ข้อมูล Contact ทางขวา */}
                        <div className="col-md-6">

                            <ul className="list-unstyled contact-links">
                                <li className="mb-3">
                                    <a href="https://www.google.com/maps/place/บางขุนเทียน+แขวงบางขุนเทียน+เขตจอมทอง+กรุงเทพมหานคร+10150/@13.7024702,100.4179853,14z/data=!4m6!3m5!1s0x30e2980630485459:0x35c879591bc95555!8m2!3d13.6982802!4d100.4452756!16s%2Fg%2F11kb_pg2jh?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-item">
                                        <MapPin size={28} className="me-2" /> Location: Chomthong, Bangkok 10150 <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="https://www.facebook.com/Nattapol1eiei" target="_blank" rel="noopener noreferrer" className="contact-item">
                                        <FaFacebook size={26} color="black" className="me-2" /> Facebook: ณัฏฐพล ไพรรื่นรมย์ <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="https://line.me/ti/p/~four5454" target="_blank" rel="noopener noreferrer" className="contact-item">
                                        <FaLine size={26} color="black" className="me-2" /> Line ID: four5454 <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="https://github.com/Fourgame" target="_blank" rel="noopener noreferrer" className="contact-item">
                                        <Github size={28} className="me-2" /> GitHub: Fourgame <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="mailto:loukfour@gmail.com" className="contact-item">
                                        <Mail size={28} className="me-2" /> Gmail: loukfour@gmail.com <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="tel:+66952505929" className="contact-item">
                                        <Phone size={28} className="me-2" /> Tell: +66 95 250 5929 <ExternalLink size={16} className="ms-2" />
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Card.Body>
            </Card>


        </section>
    );
};

export default AboutMe;
