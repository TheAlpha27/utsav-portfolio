import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

export const ContactInfo = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+91-9616083286" },
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
      fieldName: "Phone",
      fieldValue: "+91-961683286",
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
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "FTE Role",
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
      company: "Little Paws Care, NGO",
      position: "Volunteer, React Developer",
      duration: "January 2022 - February 2022, 2 Months",
      type: "Remote",
    },
    {
      company: "Little Paws Care, NGO",
      position: "React Developer",
      duration: "January 2022 - February 2022, 2 Months",
      type: "Remote",
    },
    {
      company: "Little Paws Care, NGO",
      position: "React Developer",
      duration: "January 2022 - February 2022, 2 Months",
      type: "Remote",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "wefg rg er erthgrtgreh rthtrht hth",
  items: [
    {
      institution: "Shri Barfani Academy, Indore",
      degree: "Higher Secondary",
      duration: "January 2022 - February 2022",
      Score: "90%",
    },
    {
      institution: "National Institute Of Technology, Kurukshetra",
      degree: "B-Tech in Information Technology",
      duration: "January 2020 - February 2024",
      Score: "8.0 CGPA",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "wefg rg er erthgrtgreh rthtrht hth",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
      certification: false,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
      certification: false,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
      certification: false,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
      certification: false,
    },
  ],
};

export const services = [
  {
    num: "01",
    title: "Web Development",
    description: "ABCushdfv",
    href: "/contact",
  },
  {
    num: "02",
    title: "Web 2",
    description: "2",
    href: "/contact",
  },
  {
    num: "03",
    title: "Web 3",
    description: "3",
    href: "/contact",
  },
  {
    num: "04",
    title: "Web 4",
    description: "4",
    href: "/contact",
  },
];

export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "ferhfaeufia ",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "ferhfaeufia ",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "backend",
    title: "project 3",
    description: "ferhfaeufia ",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];
