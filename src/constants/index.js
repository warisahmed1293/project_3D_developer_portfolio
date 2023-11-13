import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firstWork,
  secondWork,
  thirdWork,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CMS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "3it Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2020 - November 2021",
    points: [
      "I have been working as a Full Stack Web Developer at 3it Solutions. where I have had the opportunity to work on several exciting projects.",
      "During my time at 3it Solutions, I have designed and developed responsive web applications using modern web development technologies and frameworks. ",
      "I have developed server-side code using Node.js, Express.js, and other backend technologies.",
      "I have also developed client-side code using React and other front-end technologies.",
    ],
  },
  {
    title: "Full Stack Mobile App Developer",
    company_name: "Creative Artistz",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - April 2023",
    points: [
      "I am proud to have worked as a Full Stack Mobile App Developer.",
      "During my time at the company, I was responsible for designing and developing high-quality mobile applications for clients in various industries, using cutting-edge technologies and frameworks.",
      "I used React Native for the front-end and Node.js for the back-end, and I collaborated closely with the rest of the development team to ensure that the application was delivered on time and to the client's satisfaction.",
    ],
  },
  {
    title: "Frontend Developer ",
    company_name: "Pro Digital Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "I am proud to have worked as a Front end Developer at Pro digital solutions. ",
      " During my time at the company, I was responsible for designing and developing high-quality mobile applications for clients in various industries, using cutting-edge technologies and frameworks.",
      "I used HTML, CSS, Tailwind, Bootstrap, Vue.js, React js, Next.js for the front-end and Node.js for the back-end, and I collaborated closely with the rest of the development team to ensure that the application was delivered on time and to the client's satisfaction.",
    ],
  },
  {
    title: "Full Stack Web & Mobile App Developer",
    company_name: "Upwork",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React js, Next.js, React Native, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TimeSeal",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: firstWork,
    source_code_link: "https://github.com/",
  },
  {
    name: "EW Villa Medica",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: secondWork,
    source_code_link: "https://ewvillamedica.com/",
  },
  {
    name: "HTML Email Template",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "mailchimp",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: thirdWork,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
