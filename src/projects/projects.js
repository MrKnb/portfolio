import BacklinerPNG from 'assets/Backliner.png';
import PortfolioPNG from 'assets/Portfolio.png';
import TrumpPNG from 'assets/TrumpGraffitiMemes.png';
import ToDoPNG from 'assets/ToDos.png';
import CookingPNG from 'assets/CookingHeroes.png';
import RecalcPNG from 'assets/Recalc.png';

const projects = [
  {
    title: 'Backliner',
    image: BacklinerPNG,
    description:
      'Workflow-management app to centralize online services for music artists and groups.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Styled Components',
      'Draft.js',
      'Firebase Auth',
      'Google API',
    ],
    live: 'https://www.backliner.app',
    code: 'https://github.com/Ey-Jay/backliner',
  },
  {
    title: 'UX & UI Portfolio Website',
    image: PortfolioPNG,
    description:
      'Portfolio website to showcase various UX & UI Projects.',
    stack: [
      'React',
      'Styled Components',
    ],
    live: 'https://www.jkaether.com/',
    code: 'https://github.com/MrKnb/portfolio_jkaether',
  },
  {
    title: 'Trump Graffiti Memes',
    image: TrumpPNG,
    description: 'The hottest Trump meme generator on the internet.',
    stack: ['React', 'CSS', 'JavaScript'],
    live: 'https://www.trumpgraffitimemes.com/',
    code: 'https://github.com/MrKnb/generator',
  },
  {
    title: 'To-do App',
    image: ToDoPNG,
    description: 'To-do app built using React mainly focused on the mobile view. Color customization possible.',
    stack: ['React'],
    live: 'https://done-it.netlify.app/',
    code: 'https://github.com/Usamoto/react-todo-app',
  },
  {
    title: 'Cook Book',
    image: CookingPNG,
    description: 'Search great recipes for breakfast, lunch and dinner.',
    stack: ['JavaScript', 'CSS'],
    live: 'https://justinhorn.name/group-one-cookbook/',
    code: 'https://github.com/JustinHorn/group-one-cookbook',
  },
  {
    title: 'Recalc',
    image: RecalcPNG,
    description: 'Calculator inspired by the Apple calculator built in React.',
    stack: ['React'],
    live: 'https://reacalc.netlify.app/',
    code: 'https://github.com/Ey-Jay/recalc',
  }
];

export default projects;