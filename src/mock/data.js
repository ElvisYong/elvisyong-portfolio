import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Elvis Yong',
  subtitle: 'I\'m a developer',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'elvis.jpg',
  paragraphOne: 'I\'m a student from Singapore Management University majoring in Information Systems.',
  paragraphTwo: 'I am currently proficient in web development',
  paragraphThree: 'Exploring and learning how to use make good use of technology to solve exisiting problems.',
  resume: '', // if no resume, the button will not show up
};

export const skillsData = {
  frontendDesc: 'I like to see interaction of data with front-end components bringing life to the browser',
  frontendLang: 'React/React-Native, VueJS, HTML, Sass, CSS',
  backendDesc: 'I work with servers and databases to allow communication of data for the front-end to work reliably.',
  backendLang: 'ASP.NET CORE MVC/API, ExpressJS, Flask'
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Placeholder project',
    info: 'Projects are still wip will update with working projects once done.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'elvisyong@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elvis-yong/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ElvisYong',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
