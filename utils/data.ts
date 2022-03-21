import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

import { IProject, Service, Skill, Experience } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about: "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> and more than ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "handle database, server, api using <b>Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop  REST API using <b>laravel</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Daily Development",
    about: "I make an app every day to improve myself",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Grapql",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Jquery",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs",
    level: "88",
  },
  {
    Icon: BsCircleFill,
    name: "Nuxt",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwindcss",
    level: "95",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    name: "Hepsiburada Filter & Search Page",
    description: "Lorem İpsum Dolor Sit Amet",
    image_path: "/images/hepsiburada.png",
    github_url: "https://github.com/recepustundag/hepsiburada",
    category: ["react"],
    key_techs: ["React", "Redux", "React Testing Library"],
  },
  {
    name: "Hotel Booking",
    description: "Lorem İpsum Dolor Sit Amet",
    image_path: "/images/hotel-booking.png",
    github_url: "https://github.com/recepustundag/hotel-booking",
    category: ["react"],
    key_techs: ["React", "Redux", "craco"],
  },
  {
    name: "COVID Tracker",
    description: "Lorem İpsum Dolor Sit Amet",
    image_path: "/images/covid19-tracker.png",
    github_url: "https://github.com/recepustundag/covid19-tracker",
    category: ["react"],
    key_techs: ["React", "Redux", "SCSS"],
  },
  {
    name: "Expense Tracker Typescript",
    image_path: "/images/expense-tracker.png",
    github_url: "https://github.com/recepustundag/expense-tracker-with-typescript",
    category: ["react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "Typescript", "Ant Design"],
  },

  {
    name: "React Redux Store",
    image_path: "/images/shopping-cart.png",
    github_url: "https://github.com/recepustundag/react-redux-store",
    category: ["react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "Redux", "Styled Components"],
  },

  {
    name: "Linkedin Clone",
    image_path: "/images/linkedin-clone.png",
    github_url: "https://github.com/recepustundag/materialui-linkedin-clone-react-redux",
    category: ["react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "Redux", "Firebase", "Material UI"],
  },

  {
    name: "React Native Dictionary",
    image_path: "/images/tnative-dictionary.png",
    github_url: "https://github.com/recepustundag/react-native-dictionary",
    category: ["reactnative", "react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "React Native", "Styled System", "Styled Components", "SVGR"],
  },

  {
    name: "Gmail Clone",
    image_path: "/images/gmail-clone.png",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "Firebase", "Redux", "Material UI"],
  },
  {
    name: "Tinder Clone",
    image_path: "/images/no-image.png",
    github_url: "https://github.com/recepustundag/MERN-tinder-clone",
    category: ["express", "react","mongo"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["Express", "Mongoose", "Material UI", "Axios", "React Tinder Card"],
  },
  {
    name: "React World Ranks",
    image_path: "/images/nextjs-wordranks.png",
    github_url: "https://github.com/recepustundag/nextjs-worldranks",
    category: ["Nextjs"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "CSS Modules"],
  },
  {
    name: "Vue World Ranks",
    image_path: "/images/vue3-tailwind-worldranks.png",
    github_url: "https://github.com/recepustundag/vue3-tailwind-worldranks",
    category: ["vue", "tailwind"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["Vue3", "Tailwind"],
  },
  {
    name: "React Resort",
    image_path: "/images/resort.png",
    github_url: "https://github.com/recepustundag/react-resort-project",
    category: ["react"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["React", "Styled Components", "Context API"],
  },
  {
    name: "Calculator",
    image_path: "/images/vue-calculator.png",
    github_url: "https://github.com/recepustundag/Vue-Composition-API-Calculator",
    category: ["vue"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["Vue3"],
  },
  {
    name: "Github Search",
    image_path: "/images/gitgub-search.png",
    github_url: "https://github.com/recepustundag/github-search-user",
    category: ["vue"],
    description: "Lorem İpsum Dolor Sit Amet",
    key_techs: ["Vue", "Vuex", "SASS"],
  },
];

export const experiences: Experience[] = [
  {
    name:'Delta Bilişim LTD',
    job: 'Front End Developer',
    startDate: '2012-10',
    endDate: '2012-10',
    content: [
      'Integrated regulatory and compliance standards into product designs. ',
      'Produced websites compatible with multiple browsers.',
      'Generated design frameworks designed to encourage maximal user response rates to ad placements.',
      'Verified web-based products fulfilled prescribed project needs through direct interaction with stakeholders.',
      'Crafted SEO strategy and intuitive interface for site to achieve prominent rankings across top browser platforms.',
    ]
  },
  {
    name:'Kitle Bilişim',
    job: 'Front End Developer',
    startDate: '2013-11',
    endDate: '2014-11',
    content: [
      'Verified web-based products fulfilled prescribed project needs through direct interaction with stakeholders.',
      'Integrated regulatory and compliance standards into product designs.',
      'Crafted SEO strategy and intuitive interface for site to achieve prominent rankings across top browser platforms.',
      'Created powerful Content Management Systems to serve as interface for client.',
      'Collaborated with in-house web designers to create sleek and innovative UI design.',
    ]
  },
  {
    name:'Innova Reklam Ajansı',
    job: 'Front End Developer',
    startDate: '2013-11',
    endDate: '2014-11',
    content: [
      'Verified web-based products fulfilled prescribed project needs through direct interaction with stakeholders.',
      'Integrated regulatory and compliance standards into product designs.',
      'Created powerful Content Management Systems to serve as interface for client.',
      'Collected, defined and translated user requirements into project designs and implementation plans.',
      'Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser compatibility. ',
    ]
  },
  {
    name:'AKINSOFT SOFTWARE ENGINEERING LLC',
    job: 'Web Developer',
    startDate: '2016-06',
    endDate: '2017-06',
    content: [
      'Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.',
      'Employed PHP,Javascript, HTML, CSS and other technology to make line-code repairs and optimize corporate presence.',
      'Oversaw back-end development using PHP to maintain website integrity, security and efficiency.',
      'Increased usability of the property management system',
      'Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources.',
      'Implemented Google-based SEO and ad campaigns to meet budget specifications.',
      'Developed and design frontend modules',
    ]
  },
  {
    name:'Turhost',
    job: 'Front End Web Developer',
    startDate: '2018-07',
    endDate: 'Current',
    content: [
      'Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies. ',
      'Developed a cart system with using node,vue and bootstrap',
      'Designed and created a datatable system with alpinejs, tailwind',
      'Developed libraries and modules with using react,redux and materialui ',
      'Regularly updated knowledge of latest industry trends in web development and related technologies. ',
      'Identified and resolved website performance flags to optimize speed. ',
      'Archieved a 25% increase in efficiency in cart operations with the cart system was developed ',
      'Designed and updated layouts to meet usability and performance requirements.',
      'Multi-tasked across multiple functions and roles to generate project results and meet deadlines and organizational expectations.',
    ]
  }
]