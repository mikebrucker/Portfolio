// Get SVG icons for tech
import mikeBrucker from "../../images/mike-brucker.jpeg";
import blog0 from "../../images/blog0.png";
import blog1 from "../../images/blog1.png";
import blobMan from "../../images/blob-man.png";
import towerDefense from "../../images/tower-defense.png";
import wheelOfJavascript from "../../images/wheel-of-javascript.png";
import rostered0 from "../../images/rostered0.png";
import rostered1 from "../../images/rostered1.png";
import rostered2 from "../../images/rostered2.png";
import rostered3 from "../../images/rostered3.png";
import rostered4 from "../../images/rostered4.png";
import rostered5 from "../../images/rostered5.png";
import bruckerboard1 from "../../images/bruckerboard1.png";
import portfolio0 from "../../images/portfolio0.png";
import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
import {
  FaHockeyPuck,
  FaBookDead,
  FaGithub,
  FaLinkedin,
  FaDragon,
  FaUser
} from "react-icons/fa";
import {
  GiCartwheel,
  GiTransparentSlime,
  GiOctopus,
  GiHeavyHelm
} from "react-icons/gi";

// Data to display on my profile
export const aboutMe = {
  name: "Mike Brucker",
  icon: GiHeavyHelm,
  skills: [
    "HTML/CSS",
    "Sass/Less",
    "JavaScript",
    "jQuery",
    "ES6",
    "React",
    "Redux",
    "Firebase",
    "Firestore",
    "Ruby",
    "Ruby on Rails",
    "MongoDB",
    "NodeJS",
    "Express",
    "Git",
    "Heroku",
    "Phaser3",
    "Tiled"
  ],
  about: [
    "I am a web developer from Philadelphia. I've been focused mostly on React since I finished school but am starting to learn Python now. This portfolio site is even built on React!",
    "I am an excellent problem solver. I love nothing more than a good challenge or puzzle to tackle. I approach coding the same way I approach playing hockey, cooking, or any task I need to do. I clean things up as I progress, stay focused no matter the situation, and try to make each action as efficient as possible.",
    "I have changed my career a few times to find my passion and it hasn't worked out until now. Writing code feels like I am composing a symphony. Building an app feels like I am architecting a skyscraper. It's the perfect combination of what I've been looking for in previous careers. I am truly enthusastic about writing code. I am excited to bring my passion into an environment with other passionate coders."
  ],
  links: [
    {
      name: "Github",
      link: "https://github.com/mikebrucker",
      icon: FaGithub
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/mike-brucker",
      icon: FaLinkedin
    },
    {
      name: "Portfolio",
      link: "https://mikebrucker.com",
      icon: GiHeavyHelm
    }
  ],
  education: [
    {
      school: "New York Code and Design Academy",
      degree: "Certification of Web Development",
      from: "2018-07-23",
      to: "2018-10-17"
    },
    {
      school: "Temple University",
      degree: "Bachelor of Arts in Media Studies and Production",
      from: "2011-08-23",
      to: "2015-12-15"
    }
  ],
  images: [mikeBrucker]
};

// Data for my projects
export const projects = [
  {
    id: "1",
    name: "Rostered",
    icon: FaHockeyPuck,
    links: {
      live: "https://rostered-mwb.firebaseapp.com",
      repo: "https://github.com/mikebrucker/Rostered"
    },
    tech: ["React", "Redux", "Firebase/Firestore"],
    detail: [
      "Rostered is an app which features full CRUD functionality that I built to keep track of all of the hockey teams I play on, including the players, games, and schedules. It is written in React, utilizes Redux for state managemant, and uses Google Firebase's data storage Firestore for the back-end. This single page app nests many components to add, edit, and delete each piece of data. Each component is initially hidden until you click the corresponding button."
    ],
    images: [rostered0, rostered1, rostered2, rostered3, rostered4, rostered5]
  },
  {
    id: "2",
    name: "Brucker Board",
    icon: GiOctopus,
    links: {
      live: "https://bruckerboard.firebaseapp.com",
      repo: "https://github.com/mikebrucker/BruckerBoard"
    },
    tech: ["React"],
    detail: [
      "ToDo board like a Trello board. Keep track of ToDos in columns of Backlog, ToDo, InProgress, Completed. Each ToDo can be removed and has a priority of low, medium, or high, which is indicated by it's border color. Arrow buttons can move the ToDo into the next or previous column. Each action to add, remove, or move a ToDo will store the state of the board in localStorage to keep track on each site visit or refresh."
    ],
    images: [bruckerboard1]
  },
  {
    id: "3",
    name: "Wheel of JavaScript",
    icon: GiCartwheel,
    links: {
      live: "http://mikebrucker.com/Wheel-Of-Fortune/",
      repo: "https://github.com/mikebrucker/Wheel-Of-Fortune"
    },
    tech: ["Javascript", "jQuery", "HTML/CSS"],
    detail: [
      "This was my JavaScript Capstone project in school, the first 'big' JavaScript application I made. It can most definitely be improved but I would rather rebuild it instead. This was also the first time I ever used jQuery and I may have gotten a bit carried away with it :P. This project shows that I can learn at a very quick pace and build something that looks good and functions well."
    ],
    images: [wheelOfJavascript]
  },
  {
    id: "4",
    name: "Blob Man",
    icon: GiTransparentSlime,
    links: {
      live: "https://blob-man.mikebrucker.com",
      repo: "https://github.com/mikebrucker/Blob-Man"
    },
    tech: ["Javascript", "Phaser3", "Webpack", "Tiled"],
    detail: [
      "The first game I built was just one level of this Pac-Man clone game for a group project. In my free time I expanded it into a full game. I learned Phaser3, a JS game engine library, and built this game (the first level) in a span of ten days. Since then I've fixed bugs, added pause for the game and sounds, and added a custom start option if you just want to challenge yourself with tons of skeletons coming after you.",
      "You play as Blob-Man and you must collect all his blob children to pass the level.",
      "Skeleton enemies turn down corridors using a custom JavaScript function to randomize their direction.",
      "Skeletons increase in number every 2 levels.",
      "Skeletons increase in speed every level.",
      "Your scores are added to the bottom of the page after every game. They will disappear when you close down the page."
    ],
    images: [blobMan]
  },
  {
    id: "5",
    name: "Tower Defense",
    icon: FaDragon,
    links: {
      live: "https://tower-defense.mikebrucker.com",
      repo: "https://github.com/mikebrucker/Tower-Defense"
    },
    tech: ["Javascript", "Phaser3", "Webpack", "Tiled"],
    detail: [
      "The second game I made was my final project, a Tower Defense Game. There is a fixed path version and enemy finds it's own path version. I learned of Phaser3, a JS game engine library just weeks before making this, and built this with it.",
      "Enemies come in 30 waves of 20 units. Each tower built costs 1 resource and upgrades increase by 1 each upgrade. Towers will target the closest enemy and only be able to hit that enemy; the bullet will not be blocked by other units or bullets. Bullets can only damage their intended target and disappear upon contact or if the target no longer exists.",
      "Arrow keys move the camera around.",
      "Number keys 1-5 will set a specified zoom.",
      "Number keys 9 and 0 will zoom in and out.",
      "Boss enemies every fifth round.",
      "If 20 enemies escape you lose!",
      "Survive all 30 round and win!!!"
    ],
    images: [towerDefense]
  },
  {
    id: "6",
    name: "Blog in Gray",
    icon: FaBookDead,
    links: {
      live: "https://blog-in-gray.herokuapp.com",
      repo: "https://github.com/mikebrucker/Rails-Blog"
    },
    tech: ["Ruby", "Rails", "Ruby on Rails", "Postgres", "SQLite3"],
    detail: [
      "Blog written in Ruby on Rails. This application maintains a database of Users, Posts, and Comments. Features full CRUD functionality. With JavaScript, Users can edit their comments inline without redirecting to a new page."
    ],
    images: [blog0, blog1]
  },
  {
    id: "7",
    name: "Portfolio",
    icon: FaUser,
    links: {
      live: "https://mikebrucker.com",
      repo: "https://github.com/mikebrucker/Portfolio"
    },
    tech: ["React"],
    detail: [
      "This is my portfolio site that you are looking at already. Is this recursive or redundant?"
    ],
    images: [portfolio0, portfolio1, portfolio2]
  }
];
