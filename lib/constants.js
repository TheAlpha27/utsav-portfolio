import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJira,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMobx,
  SiPostman,
} from "react-icons/si";

export const HomeInfo = {
  name: "Utsav Soni",
  title: "Frontend Engineer",
  description:
    "Frontend Developer specializing in MERN stack. Crafting dynamic,seamless web apps with creativity and expertise. Always eager to learn new technologies and innovate.",
  resumeLink:
    "https://drive.google.com/drive/folders/1sMNqrg3P_sNKatt6bFgwdsiKnZq_X3D8?usp=sharing",
};

export const ContactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "utsav.soni.27@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jhansi, Uttar-Pradesh, India, 284002",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/TheAlpha27" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/thealpha27/" },
];

export const about = {
  title: "About me",
  description:
    "fweuih efhiuew ewh fuie efgbhwae  ehfui awef dvgyufdg vuyh uihf uiwe",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Utsav Soni",
    },
    {
      fieldName: "Email",
      fieldValue: "utsav.soni.27@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Freelance/Contract",
      fieldValue: "Available",
    },
    {
      fieldName: "Fulltime Role",
      fieldValue: "Available",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "wefg rg er erthgrtgreh rthtrht hth",
  items: [
    {
      company: "Multiple Clients in New-Zealand and Canada",
      position: "Frontend Engineer, Contract",
      duration: "March 2024 - Present",
      type: "Remote",
    },
    {
      company: "Concept Dash, Toronto, Canada",
      position: "Full Stack Developer Intern",
      duration: "August 2023 - April 2024, 9 Months",
      type: "Remote",
      ceritficateLink:
        "https://drive.google.com/file/d/1thOi1Akzf3H-IqpIlE4qFMpDxBaKyS6z/view?usp=sharing",
    },
    {
      company: "Zoyride Global Pvt Ltd, Gurugram, Haryana",
      position: "Full Stack Developer Intern",
      duration: "January 2023 - June 2023, 6 Months",
      type: "Remote",
      ceritficateLink:
        "https://drive.google.com/file/d/1hQGbIE1AS2q267RNNm-odpLU2NFNPmHm/view?usp=sharing",
    },
    {
      company: "Little Paws Care NGO, Orrisa, India",
      position: "Volunteer, React Developer",
      duration: "January 2022 - February 2022, 2 Months",
      type: "Remote",
      ceritficateLink:
        "https://drive.google.com/file/d/1J_vSMPkzwH2mh_YTFBz8CE9ZMHJBBlF7/view?usp=sharing",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "wefg rg er erthgrtgreh rthtrht hth",
  items: [
    {
      institution: "NIT, Kurukshetra",
      degree: "B-Tech in Information Technology",
      duration: "January 2020 - February 2024",
      Score: "8.0 CGPA",
    },
    {
      institution: "Shri Barfani Academy, Indore",
      degree: "Higher Secondary",
      duration: "April 2018 - April 2019",
      Score: "90%",
    },
  ],
};

export const skills = {
  title: "Tech Stack",
  skillList: [
    {
      icon: <FaReact />,
      title: "ReactJs",
      certification: "f",
      star: true,
    },
    {
      icon: <FaJs />,
      title: "Javascript",
      certification: "fe",
      star: true,
    },
    {
      icon: <SiTypescript />,
      title: "Typescript",
      certification: false,
      star: true,
    },
    {
      icon: <RiNextjsFill />,
      title: "NextJs",
      certification: false,
      star: true,
    },
    {
      icon: <RiTailwindCssFill />,
      title: "Tailwind CSS",
      certification: false,
      star: true,
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      certification: false,
      star: true,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
      certification: false,
      star: true,
    },
    {
      icon: <FaCss3 />,
      title: "CSS 3",
      certification: false,
      star: true,
    },
    {
      icon: <SiNodedotjs />,
      title: "NodeJs",
      certification: false,
      star: false,
    },
    {
      icon: <SiExpress />,
      title: "ExpressJs",
      certification: false,
      star: false,
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      certification: false,
      star: false,
    },
    {
      icon: <SiMobx />,
      title: "Mobx",
      certification: false,
      star: false,
    },
    {
      icon: <FaGithub />,
      title: "Github",
      certification: false,
      star: false,
    },
    {
      icon: <SiPostman />,
      title: "Postman",
      certification: false,
      star: false,
    },
    {
      icon: <FaJira />,
      title: "JIRA",
      certification: false,
      star: false,
    },
  ],
};

export const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "Designing both frontend and backend components for seamless user experiences.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Responsive Web Design",
    description:
      "Creating mobile-friendly, adaptable websites for various devices.",
    href: "/contact",
  },
  {
    num: "03",
    title: "API Integration",
    description: "Connecting applications with third-party APIs and services.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Maintenance and Support",
    description: "Providing ongoing support and updates for web applications.",
    href: "/contact",
  },
];

export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Alpha Projects",
    description:
      "A comprehensive project management system with user authentication (login/signup/reset password/otp verification) and three user types (Admin, User, Guest). ",
    stack: [
      {
        name: "ReactJs",
      },
      {
        name: "react-leaflet-maps",
      },
      {
        name: "Javascript",
      },
      {
        name: "NodeJs",
      },
      {
        name: "ExpressJs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "JWT Authentication",
      },
      {
        name: "Axios",
      },
    ],
    image: "/assets/work/AlphaProjects.jpg",
    live: "https://alpha-projects-frontend.vercel.app/",
    github: "https://github.com/TheAlpha27/Alpha-Projects-Frontend",
  },
  {
    num: "02",
    category: "frontend",
    title: "Let's Meet",
    description:
      "This project enables instant meetings, scheduled meets, personal rooms, screen sharing, and offers multiple login options for seamless video conferencing.",
    stack: [
      {
        name: "NextJs",
      },
      {
        name: "stream-io",
      },
      {
        name: "Javascript",
      },
      {
        name: "Tailwind",
      },
      {
        name: "ShadCN Ui",
      },
      {
        name: "Clerk Authentication",
      },
    ],
    image: "/assets/work/LetsMeet.jpg",
    live: "https://lets-meet-app.vercel.app/",
    github: "https://github.com/TheAlpha27/lets-meet-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio",
    description:
      "A sleek, responsive portfolio website showcasing my projects and skills.",
    stack: [
      {
        name: "NextJs",
      },
      {
        name: "Javascript",
      },
      {
        name: "Tailwind",
      },
      {
        name: "ShadCN Ui",
      },
      {
        name: "Framermotion",
      },
    ],
    image: "/assets/work/Portfolio.jpg",
    live: "https://utsav-portfolio-tucu.vercel.app/",
    github: "https://github.com/TheAlpha27/utsav-portfolio",
  },
];
