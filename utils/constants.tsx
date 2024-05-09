import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FaBriefcaseMedical, FaReact, FaUserGraduate } from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';
import { Project, ProjectStatus } from '../types/project';

export const SOCIAL_LINKS = {
  gitHub: 'https://github.com/eilon100',
  linkedin: 'https://www.linkedin.com/in/eilon-shamir/',
  instagram: 'https://www.instagram.com/eilon_shamir/',
  whatsapp: 'https://wa.link/tdo38m',
};

export const ABOUT_PARAGRAPH = (
  <p>
    Hello there, I'm Eilon, a dedicated software developer who excels at
    creating innovative, user-friendly solutions.
    <br /> With a strong passion for coding, I thrive on the challenge of
    turning complex problems into elegant, functional software.
    <br /> My mission is to make technology more accessible and efficient for
    everyone.
  </p>
);

export const ABOUT_SKILLS = [
  {
    title: 'Frontend Developer',
    icon: '/about/frontend.png',
  },
  {
    title: 'Backend Developer',
    icon: '/about/backend.png',
  },
  {
    title: 'UI/UX Design',
    icon: '/about/ux.png',
  },
];

export const PROJECTS: Project[] = [
  {
    image: '/projects/ReplicazLogo.png',
    title: 'Replicaz',
    status: 'live',
    technologyIcons: [
      'ts',
      'react',
      'next',
      'tailwind',
      'materialui',
      'express',
      'mongodb',
      'nodejs',
    ],
    paragraph:
      'Developed a social network web app to help people to afford buying expensive clothing and shoes for cheap. ',
    siteLink: 'https://replicaz.vercel.app/',
  },
  {
    image: '/projects/WeatherSite.png',
    title: 'Weather Site',
    status: 'live',
    technologyIcons: ['js', 'scss', 'react', 'css', 'html'],
    paragraph:
      'In my free time, I developed a weather website that provides users with up-to-date weather information for any location.',
    siteLink: 'https://weather-site-gray.vercel.app/',
  },
  {
    image: '/projects/toval-recycle.png',
    title: 'Toval Recycle',
    status: 'updating',
    technologyIcons: ['js', 'react', 'tailwind', 'html', 'vite'],
    paragraph:
      'I developed an impactful landing page for a recycling company, I prioritized UI / UX to ensure an engaging user experience while optimizing site performance.',
    siteLink: 'https://toval-recycle-site.vercel.app/',
  },
  {
    image: '/projects/tic-tac-toe.png',
    title: 'Tic Tac Toe online',
    status: 'live',
    technologyIcons: [
      'js',
      'react',
      'scss',
      'html',
      'vite',
      'express',
      'nodejs',
    ],
    paragraph:
      'Classic game of tic-tac-toe, we ventured into the world of online gaming by creating a dynamic Tic Tac Toe experience. Our collaborative project boasts account management, leaderboards, and multiplayer capabilities, enhancing the traditional game with a competitive twist and providing a platform for gamers to connect and compete',
    siteLink: 'https://tic-tac-toe-online-game.vercel.app/',
  },
];

export const SKILLS = [
  { name: 'js', icon: '/tech/javascript.png' },
  { name: 'typescript', icon: '/tech/typescript.png' },
  { name: 'html', icon: '/tech/html.png' },
  { name: 'css', icon: '/tech/css.png' },
  { name: 'react', icon: '/tech/reactjs.png' },
  { name: 'tailwind', icon: '/tech/tailwind.png' },
  { name: 'figma', icon: '/tech/figma.png' },
  { name: 'nodejs', icon: '/tech/nodejs.png' },
  { name: 'redux', icon: '/tech/redux.png' },
  { name: 'git', icon: '/tech/git.png' },
  { name: 'mongodb', icon: '/tech/mongodb.png' },
  { name: 'docker', icon: '/tech/docker.png' },
  { name: 'scss', icon: '/tech/scss.png' },
  { name: 'nextjs', icon: '/tech/nextjs.png' },
  { name: 'socketio', icon: '/tech/socketio.png' },
  { name: 'materialui', icon: '/tech/materialui.png' },
];

export const EXPERIENCE = [
  {
    title: 'Full matriculation certificates',
    location: 'Begin High School',
    description: 'I graduated after 12 years of studying.',
    list: [
      '5 units Math',
      '5 units English',
      '5 units Business Management',
      '5 units computer science',
    ],
    icon: <FaUserGraduate />,
    date: 'Sep 2016 - Jul 2019',
    points: ['1', '2', '3'],
  },
  {
    title: 'Israel Defense Forces',
    location: '',
    description:
      'As a combat medic in the army, I dedicated myself to providing life-saving care in high-pressure situations, where every moment counted',
    list: [
      'Combat medic in Handasa Kravit',
      'Commander Guider of combat medics',
      'Research medic',
    ],
    icon: <FaBriefcaseMedical />,
    date: 'Nov 2019 - Aug 2022',
    points: ['1', '2', '3'],
  },
  {
    title: 'Full Stack Developer | Freelance',
    location: 'Remote',
    description:
      "I'm a full-stack developer working also as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, NodeJs, Express and MongoDB. I'm open to full-time opportunities.",
    icon: <MdOutlineComputer />,
    date: 'Jul 2021 - Jan 2022',
    points: ['1', '2', '3'],
  },
  {
    title: 'Full-Stack Developer Front-end Focused',
    location: 'Kal-Quote · Full Time',
    description:
      'A startup company that specializes in providing a solution to the problem of communication and management between suppliers and customers.',
    list: [
      'Head of a team of 3 people',
      'Responsible for the final result of the tasks',
      'Invests constant thought into clear readable code',
    ],
    icon: <FaReact />,
    date: 'Jan 2022 - Nov 2023',
    points: ['1', '2', '3'],
  },
  {
    title: 'Front-end Developer',
    location: 'Abra Web & Mobile · Full Time',
    description: '',
    list: [
      'Leader developer under Team lead',
      'Responsible for development strategies and architecture with overall project goals and priorities',
      'enhanced both organizational efficiency and project code quality by 20%',
    ],
    icon: <FaReact />,
    date: 'Nov 2023 - Present',
    points: ['1', '2', '3'],
  },
];

export const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    text: '054-282-2219',
  },
  {
    icon: <EnvelopeIcon />,
    text: 'eilonshamir123@gmail.com',
  },
  {
    icon: <MapPinIcon />,
    text: 'Rosh HaAyin, Israel',
  },
];
