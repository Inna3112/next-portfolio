const socialNetworkImg = '/static/images/Pages/Home/social-network.jpg';
const todo = '/static/images/Pages/Home/todo.jpg';
const gitIcon = '/static/images/Pages/Home/icons/contacts/032-github.svg';
const InstIcon = '/static/images/Pages/Home/icons/contacts/044-instagram.svg';
const linkedIcon = '/static/images/Pages/Home/icons/contacts/052-linkedin.svg';
const telegaIcon = '/static/images/Pages/Home/icons/contacts/090-telegram.svg';
const codeIcon = '/static/images/Pages/Home/icons/contacts/codewars.svg';
const browser = '/static/images/Pages/Home/053-web browser.svg';
const pencil = '/static/images/Pages/Home/038-pencil box.svg';
const rocket = '/static/images/Pages/Home/039-rocket.svg';
const checklist = '/static/images/Pages/Home/047-checklist.svg';
const mail = '/static/images/Pages/Home/icons/formInfoIcons/mail.svg';
const location = '/static/images/Pages/Home/icons/formInfoIcons/location.svg';
const phone = '/static/images/Pages/Home/icons/formInfoIcons/phone.svg';

const socialNetwork = {
  backgroundImage: `url(${socialNetworkImg})`,
};
const todoList = {
  backgroundImage: `url(${todo})`,
};
const cards = {
  backgroundImage: `url(${socialNetworkImg})`,
};

export const state = {
  skills: [
    {
      icon: browser,
      title: 'Foundations',
      description: 'JavaScript, TypeScript, HTML5, CSS3',
      imgAlt: 'Foundations',
    },
    {
      icon: rocket,
      title: 'Development',
      description: 'React, Redux, Redux-Thunk, Axios, Redux-toolkit',
      imgAlt: 'Development',
    },
    {
      icon: checklist,
      title: 'Testing',
      description: 'Unit Tests, SnapShot, Storybook',
      imgAlt: 'Testing',
    },
    {
      icon: pencil,
      title: 'Design',
      description: 'Material UI, Ant-Design ',
      imgAlt: 'Design',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Social network',
      description: 'React, Redux, Redux-Thunk, Formik, REST API, Typescript, CSS-Modules. A social networking service. '
                + 'An online platform for people to build social networks or social relationships with other people.',
      style: socialNetwork,
      link: 'https://github.com/Inna3112/social-network-new',
    },
    {
      id: 2,
      title: 'Todolist',
      description: 'React, Redux, Redux-Thunk, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests. '
                + 'An app for Task Management, Project Management, Productivity.',
      style: todoList,
      link: 'https://github.com/Inna3112/TodoList',
    },
    {
      id: 3,
      title: 'Knowledge cards',
      description: 'React, Redux, Redux-Thunk, REST API, Typescript'
                + 'An app was created for learning. The user can enter a list of questions and answers for further '
                + 'study.',
      style: cards,
      link: 'https://github.com/Inna3112/Cards',
    }
  ],
  contacts: [
    { image: gitIcon, imgAlt: 'git', link: 'https://github.com/Inna3112' },
    { image: InstIcon, imgAlt: 'inst', link: 'https://www.instagram.com/innafomichova/' },
    { image: linkedIcon, imgAlt: 'in', link: 'https://www.linkedin.com/in/inna-fomichova-466093214/' },
    { image: telegaIcon, imgAlt: 'telegram', link: 'https://t.me/InnaFSS' },
    { image: codeIcon, imgAlt: 'codewars', link: 'https://www.codewars.com/users/Inna3112' },
  ],
  formInfoItems: [
    { image: mail, imgAlt: 'mail', description: 'innula3113@gmail.com' },
    { image: location, imgAlt: 'location', description: 'Kryvyi Rih, Ukraine' },
    { image: phone, imgAlt: 'phone', description: '+380967708048' },
  ]
};

export const navLinks = [
  { name: 'main', path: '/' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contacts', path: '/contacts' }
];

export const burgerNavItems = [
  { name: 'main', path: '/' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contacts', path: '/contacts' }
];
