// src/data/projectData.js
import vivart1 from "./picture/Vivart/vivart1.png";
import vivart2 from "./picture/Vivart/vivart2.png";

import reseach1 from "./picture/reseach/reseach1.png";
import reseach2 from "./picture/reseach/reseach2.png";

import india1 from "./picture/India/india1.png";
import india2 from "./picture/India/india2.png";
import india3 from "./picture/India/india3.png";

import greenbox1 from "./picture/Greenbox/greenbox1.png";
import greenbox2 from "./picture/Greenbox/greenbox2.png";
import greenbox3 from "./picture/Greenbox/greenbox3.png";

import cannabis1 from "./picture/Cannabis/cannabis1.png";
import cannabis2 from "./picture/Cannabis/cannabis2.png";

const projects = [
  {
      title: "Summer Internship abroad – Vishwakarma University, India",
      date: "Apr–Jun 2025",
      desc: "Cross-cultural summer internship in software development.",
      fullDesc:
        "Participated in frontend/backend development, attended academic workshops, and collaborated on research topics including AI and IoT solutions.",
      imgs: [india1, india2, india3],
      extraLinks: [
        {
          label: "certificate",
          url: "https://drive.google.com/file/d/1OptBrqc3fXj129Rm5bRIIn9u7WpBC070/view?usp=sharing"
        }],
      tag: "Internship",
    },
    
  {
      title: "Measurement of Security Headers and Misconfiguration on Real World Websites",
      date: "May 2025",
      desc: "Analyzed HTTP security headers from 1 million websites.",
      fullDesc: `A large-scale research project studying the adoption and misconfiguration of 17 HTTP security headers across 1 million domains (Majestic Million). Key contributions include:

    • Developed a Python-based crawler to collect HTTP response headers from real-world websites  
    • Evaluated headers like CSP, HSTS, Permissions-Policy against OWASP and MDN standards  
    • Built a Chrome Extension named "Check Header OWASP" for real-time analysis of headers and DOM security  
    • Integrated AI (Gemini Language Model) to explain header presence, absence, or misconfiguration in natural language  
    • Detected misuse of deprecated headers (e.g., X-XSS-Protection, Public-Key-Pins) and unsafe directives (e.g., unsafe-inline)  
    • The extension includes DOM scanning and auto-fix features for inline scripts, iframes, and insecure meta tags  
    • Study reveals widespread inconsistencies and emphasizes the need for better tooling and developer education  

    This work bridges large-scale measurement, AI-assisted explanation, and browser-side tooling to improve web application security in practice.`,
      imgs: [reseach1, reseach2],
      link: "https://github.com/Fourgame/check-headers-OWASP-extension.git",
      tag: "Security,Research,AI"
    },
  {
    title: "Online Art Marketplace and Auction Platform",
    date: "Feb 2025",
    desc: "E-commerce platform for digital artworks.",
    fullDesc: `Vivart is a React-based online marketplace and auction system for digital artworks. It includes:

    • Real-time auctioning via WebSocket for authenticated users  
    • Secure image masking (Blind Art) that partially obscures artworks before purchase  
    • Bid system for buyers with personalized bidding history and seller-side bid selection  
    • Artwork upload and post editing for sellers, including preview and pricing tools  
    • Integrated messaging system between buyers and sellers (Blind Art Messenger)  
    • Shopping cart and full purchase history  
    • Report management system for user-submitted content issues  
    • Admin dashboard to manage users, artworks, and reports  
    • Shipment tracking tools for sellers, including tracking number input  
    • User profile system with post and bidding activity  
    • Fully responsive UI, designed with Figma  
    • Backend powered by Node.js and MongoDB with secure auth, image masking, and real-time bid handling`,

    imgs: [vivart1, vivart2],
    tag: "React,WebSocket,E-commerce",
    extraLinks: [
      {
        label: "Frontend GitHub",
        url: "https://github.com/Porramin-Boonnak/vivart"
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/Porramin-Boonnak/se-back-normal"
      },
      {
        label: "Figma Design",
        url: "https://www.figma.com/design/5ENc287NQlt4Zd9nuyvd9O/NEW-VEE?node-id=0-1&t=QMPKwXC7LBXQqpTB-1"
      }
    ]
  },
  {
    title: "A Smart IoT System for Plant Growth Optimization",
    date: "Feb 2025",
    desc: "IoT system for Plant farming with ML video analysis.",
    fullDesc: `An IoT-based smart Plant cultivation system built with Raspberry Pi 5 and ESP32 + camera modules. The system integrates real-time video analysis, sensor monitoring, and remote farming control. Key features include:

    • ML-based video analysis using TensorFlow to detect plant health conditions  
    • Flask backend running on Ubuntu server (exposed via GNS3 port forwarding) for real-time monitoring  
    • Soil pH, temperature, and humidity sensors with live data streamed to the dashboard  
    • Remote control of irrigation, fertilization, lighting, and pesticide systems via web interface  
    • Data logging into MongoDB for time-series graph visualization  
    • Responsive dashboard displaying real-time sensor statistics and video feed  
    • Modular control nodes built with ESP32 for reliable low-power operation`,
    imgs: [cannabis1, cannabis2],
    link: "https://github.com/Fourgame/Iot_Cannabis_Project",
    tag: "Pi5,Macheine Learning,Flask,MongoDB"
  },
  {
  title: "Automated Sidewalk Violation Detection via ESP32 and License Plate Recognition",
  date: "Oct 2024",
  desc: "Automatic License Plate Recognition using ESP32,ESP32-CAM and ciracore.",
  fullDesc: `An automatic license plate recognition (ALPR) system for detecting motorcycles illegally riding on pedestrian sidewalks. The system is designed for real-time violation detection and alerting. Key components include:

    • ESP32 used to remotely trigger an ESP32-CAM to capture images via MQTT  
    • Captured images transmitted through MQTT to a cloud server running Cira Core  
    • YOLOv3 model used within Cira Core to detect motorcycles and recognize license plates  
    • If a sidewalk violation is detected, the system automatically sends a LINE notification with the evidence image using the Cira Core API  
    • Designed for edge-device efficiency and real-time public safety enforcement  
    • Modular and extendable for broader traffic surveillance or smart city integration`,
      imgs: [greenbox1, greenbox2, greenbox3],
      extraLinks: [
      {
        label: "Google Drive",
        url: "https://drive.google.com/drive/folders/11-Q11yY_MasWuRxlSzFvocAcQ-ltynOk?usp=sharing"
      }
    ],
      tag: "Ciracore,Nodered,YOLOv3"
    },
    
];

export default projects;
