import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  cpp,
  java,
  rlanguage,
  sql,
  php,
  json, 
  spotlight1,
  project1,
  project2,
  project3,
  pytorch,
  tensorflow,
  django,
  flask

} from "../assets";

const projects = [
  {
    title: 'Flight Statistics Web Application',
    desc: 'A web application that retrieves and showcases passenger flight statistics from the Hong Kong Airport Open Data using REST web services. This website uses JavaScript, PHP and AJAX communication to fetch data from the REST web service and dynamically update the content ',
    subdesc:
      'Extracts relevant flight information from JSON datasets based on user-selected dates \nMade use of Open Data and php to gather relevant statistics and present total numbers of departure and arrival flights, unique destinations and origins, special cases, and histograms of flight distribution.',
    href: 'https://github.com/fykhan/flight-statistics-web-application',
    texture: project1,
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1,
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: javascript,
      },
      {
        id: 2,
        name: 'PHP',
        path: php,
      },
      {
        id: 3,
        name: 'JSON',
        path: json,
      },
    ],
  },
  {
    title: 'Web Chat Application',
    desc: 'PHP-based web chat platform that allows users to register, log in, and exchange real-time messages with other users. ',
    subdesc:
      'It is built using PHP, MySQL, JavaScript, and AJAX technologies. \nHandles User registration and login, performs both client side and server side validation• Real-time chat functionality using AJAX and JavaScript \nUses MySQL database to store user information and chat messages',
    href: 'https://github.com/fykhan/webchat',
    texture: project2,
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1,
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: javascript,
      },
      {
        id: 2,
        name: 'PHP',
        path: php,
      },
      {
        id: 3,
        name: 'JSON',
        path: json,
      },
      {
        id: 4,
        name: 'MySQL',
        path: sql,
      }
    ],
  },
  {
    title: 'Angry Birds Inspired Terminal Game',
    desc: 'A captivating rendition of Angry Birds using terminal, leveraging the curses and time libraries',
    subdesc:
      'My contributions include: \nIncorporating projectile motion formulas. \nEnhancing gameplay with Braille and Unicode characters for an engaging visual experience. Implementing a customizable feature allowing users to create personalized levels through text files. Feature uses file management to detect new levels made in the file system and file I/O to make levels based on the files.\n ',
    href: 'https://github.com/fykhan/1330-Game',
    texture: project3,
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1,
    tags: [
      {
        id: 1,
        name: 'Python',
        path: python,
      },

    ],
  },
]

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "React JS",
    icon: reactjs,
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
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },

];

const languages = [{
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "R",
    icon: rlanguage,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PHP",
    icon: php,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: spotlight1,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: spotlight1,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: spotlight1,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: spotlight1,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



export { languages, technologies, experiences, projects };