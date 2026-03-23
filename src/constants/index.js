// src/constants/index.js
import platform from "../assets/resumes.png";
import smartcollab from "../assets/smartcollab.png";
import cppimg from "../assets/cppimg.png";
import nptel from "../assets/nptel.png";
import oracle from "../assets/oracle.png";
import resume from "../assets/vismayacv.pdf";

const web = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg";
const mobile = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
const backend = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const creator = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg";

const javascript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const css = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const reactjs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const tailwind = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";
const nodejs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const threejs = "https://raw.githubusercontent.com/pmndrs/drei-assets/master/threejs.png"; // More reliable 3js icon
const git = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
const java = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
const python = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"; // Corrected Python link
const django = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg";
const shopify = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"; // Shows Java for Tutor
const starbucks = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg";
const tesla = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eleventy/eleventy-original.svg";
const jobit = "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=300";
const carrent = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300";

export { 
  web, mobile, backend, creator, javascript, html, css, 
  reactjs, tailwind, nodejs, threejs, git, java, python, django,
  shopify, starbucks, tesla, jobit, carrent 
};



const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  {
    id: "certifications", // Added this for your new section
    title: "Certifications",
  },
];

const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Django Specialist", icon: mobile },
  { title: "Java DSA Expert", icon: backend },
  { title: "CS Tutor (CBSE/State Board)", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];
const certifications = [
  {
    name: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    description: "Validation of fundamental AI concepts, machine learning workloads, and Oracle Cloud Infrastructure AI services.",
    icon: oracle, // Use Oracle logo
    link: "https://drive.google.com/file/d/1nW-lh7z68S8Oiv_E1RD1FhFLC6_hEf98/view?usp=sharing", 
  },
  {
    name: "Cloud Computing (NPTEL)",
    issuer: "IIT / NPTEL",
    date: "2024",
    description: "In-depth study of cloud architecture, virtualization, and distributed computing models.",
    icon: nptel,
    link: "https://drive.google.com/file/d/1ai897xR3BqpZzmHmScsnJdiGlpVs5umy/view?usp=sharing",
  },
  {
    name: "Summer Training – OOPs & DSA",
    issuer: "CSE Pathshala",
    date: "July 2025",
    description: "Intensive training in C++ focusing on Inheritance, Polymorphism, and core Data Structures like Trees, Stacks, and Queues.",
    icon: cppimg, // Generic C++ or Training icon
    link: "https://drive.google.com/file/d/1RJJV8BjITBraogRSlTP762uQnLbitGM7/view?usp=sharing",
  },
];


const experiences = [
  {
    title: "Computer Science Tutor",
    company_name: "Self-Employed",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Providing personalized tutoring for CBSE and State Board students (Classes 10-12).",
      "Focusing on Java, C++, Python, SQL, and programming fundamentals.",
    ],
  },
  {
    title: "B.Tech CSE Student",
    company_name: "Lovely Professional University",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Specializing in Computer Science with a focus on Full-Stack Development.",
      "Maintained a consistent academic record with a 7.12 CGPA.",
    ],
  },
  {
    title: "High School Excellence",
    company_name: "St Joseph's EMHS",
    icon: tesla,
    iconBg: "#383E56",
    date: "2020 - 2023",
    points: [
      "Achieved a 99% score in Matriculation.",
      "Achieved an 89% score in Intermediate.",
    ],
  },
];



const projects = [
  {
  name: "AI Resume Analysis Platform",
  description:
    "An AI-powered ATS platform that scores resumes against job descriptions and provides upskilling insights using NLP.",
  tags: [
    { name: "Django", color: "green-text-gradient" },
    { name: "React.js", color: "blue-text-gradient" },
    { name: "PostgreSQL", color: "blue-text-gradient" },
    { name: "JWT", color: "pink-text-gradient" },
  ],
  image: platform, // Use a technical diagram here
  source_code_link: "https://github.com/vismayaks28/resume-analyzer-backend",
},
  {
  name: "SmartCollab",
  description:
    "A scalable MERN collaboration platform with modular project workflows and JWT-secured team management.",
  tags: [
    { name: "MongoDB", color: "green-text-gradient" },
    { name: "Express.js", color: "orange-text-gradient" },
    { name: "React", color: "blue-text-gradient" },
    { name: "Node.js", color: "pink-text-gradient" },
  ],
  image: smartcollab, 
  source_code_link: "https://github.com/vismayaks28/SmartCollab",
}
  ,
  {
    name: "ReadyUp Platform",
    description: "Collaborative web platform for startup events with structured categorization and intuitive navigation.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/vismayaks28/readyup",
  },
];

export { navLinks, services, technologies, experiences, projects, certifications, resume};