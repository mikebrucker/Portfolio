// Get SVG icons for tech
import rostered0 from "./images/projects/rostered0.png";
import rostered1 from "./images/projects/rostered1.png";
import rostered2 from "./images/projects/rostered2.png";
import rostered3 from "./images/projects/rostered3.png";
import rostered4 from "./images/projects/rostered4.png";
import rostered5 from "./images/projects/rostered5.png";

import bruckerBoard0 from "./images/projects/brucker-board0.png";
import bruckerBoard1 from "./images/projects/brucker-board1.png";

import mikeBrucker from "./images/projects/mike-brucker.jpeg";

import wheelOfJavascript0 from "./images/projects/wheel-of-javascript0.png";
import wheelOfJavascript1 from "./images/projects/wheel-of-javascript1.png";
import wheelOfJavascript2 from "./images/projects/wheel-of-javascript2.png";

import blobMan0 from "./images/projects/blob-man0.png";
import blobMan1 from "./images/projects/blob-man1.png";
import blobMan2 from "./images/projects/blob-man2.png";

import towerDefense0 from "./images/projects/tower-defense0.png";

import blog0 from "./images/projects/blog0.png";
import blog1 from "./images/projects/blog1.png";

import portfolio0 from "./images/projects/portfolio0.png";
import portfolio1 from "./images/projects/portfolio1.png";
import portfolio2 from "./images/projects/portfolio2.png";

import firebase from "./images/svg/firebase.svg";
import phas3r from "./images/svg/phas3r.svg";
import redux from "./images/svg/redux.svg";
import gimp from "./images/svg/gimp.svg";
import tiled from "./images/svg/tiled.svg";
import materialui from "./images/svg/materialui.svg";
import nycda from "./images/svg/nycda.svg";
import temple from "./images/svg/temple.svg";

import resume from "./images/Mike-Brucker-Resume.pdf";

import {
  FaHockeyPuck,
  FaBookDead,
  FaGithub,
  FaLinkedin,
  FaDragon,
  FaRegEnvelope,
  FaRegUser,
  FaRegFilePdf
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
  type: "Profile",
  icon: GiHeavyHelm,
  skills: [
    "JavaScript",
    "React",
    "Redux",
    "jQuery",
    "HTML",
    "CSS",
    "Sass",
    "Ruby",
    "Rails",
    "NodeJS",
    "MongoDB",
    "Express",
    "Firebase",
    "Material-UI",
    "Git",
    "Heroku",
    "Phaser3",
    "Gimp"
  ],
  tech: [
    { name: "JavaScript", icon: "devicon devicon-javascript-plain colored" },
    { name: "React", icon: "devicon devicon-react-original colored" },
    { name: "Redux", icon: redux },
    { name: "jQuery", icon: "devicon devicon-jquery-plain-wordmark colored" },
    { name: "HTML", icon: "devicon devicon-html5-plain-wordmark colored" },
    { name: "CSS", icon: "devicon devicon-css3-plain-wordmark colored" },
    { name: "Sass", icon: "devicon devicon-sass-original colored" },
    { name: "Ruby", icon: "devicon devicon-ruby-plain-wordmark colored" },
    { name: "Rails", icon: "devicon devicon-rails-plain-wordmark colored" },
    { name: "PostgreSQL", icon: "devicon devicon-postgresql-plain colored" },
    { name: "Webpack", icon: "devicon devicon-webpack-plain colored" },
    { name: "NodeJS", icon: "devicon devicon-nodejs-plain colored" },
    { name: "MongoDB", icon: "devicon devicon-mongodb-plain-wordmark colored" },
    {
      name: "Express",
      icon: "devicon devicon-express-original-wordmark colored"
    },
    { name: "Firebase", icon: firebase },
    { name: "Material-UI", icon: materialui },
    { name: "Git", icon: "devicon devicon-git-plain-wordmark colored" },
    {
      name: "Heroku",
      icon: "devicon devicon-heroku-original-wordmark colored"
    },
    { name: "Phaser3", icon: phas3r },
    { name: "Gimp", icon: gimp },
    { name: "Tiled", icon: tiled }
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
      name: "Email",
      link: "mailto:michael.w.brucker@gmail.com",
      icon: FaRegEnvelope
    },
    {
      name: "Resume",
      link: resume,
      icon: FaRegFilePdf
    }
  ],
  education: [
    {
      school: "New York Code and Design Academy",
      degree: "Certificate of Web Development",
      from: "2018-07-23",
      to: "2018-10-17",
      class: "nycda",
      icon: nycda
    },
    {
      school: "Temple University",
      degree: "Bachelor of Arts in Media Studies and Production",
      from: "2011-08-23",
      to: "2015-12-15",
      class: "temple",
      icon: temple
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
    links: [
      {
        name: "Live",
        link: "https://rostered-mwb.firebaseapp.com",
        icon: FaHockeyPuck
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Rostered",
        icon: FaGithub
      }
    ],
    tech: ["React", "Redux", "Firebase", "Firestore"],
    detail: [
      "Rostered is an app which features full CRUD functionality that I built to keep track of all of the hockey teams I play on, including the players, games, and schedules. It is written in React, utilizes Redux for state managemant, and uses Google Firebase's data storage Firestore for the back-end. This single page app nests many components to add, edit, and delete each piece of data. Each component is initially hidden until you click the corresponding button.",
      "A server side function is run when teams are created to add its own id to a key: 'value' pair, teamId: XXXXXX. This is necessary for other components to display and update the correct team data."
    ],
    images: [rostered0, rostered1, rostered2, rostered3, rostered4, rostered5]
  },
  {
    id: "2",
    name: "Brucker Board",
    icon: GiOctopus,
    links: [
      {
        name: "Live",
        link: "https://bruckerboard.firebaseapp.com",
        icon: GiOctopus
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/BruckerBoard",
        icon: FaGithub
      }
    ],
    tech: ["React", "Sass"],
    detail: [
      "This is a ToDo board like a Trello board. Keep track of ToDos in columns of Backlog, ToDo, InProgress, Completed. Each ToDo can be removed and has a priority of low, medium, or high, which is indicated by it's border color. ToDo's also have a timestamp of when it was created. Arrow buttons can move the ToDo into the next or previous column.",
      "Each action to add, remove, or move a ToDo will store the state of the board in localStorage to keep track on each site visit or refresh."
    ],
    images: [bruckerBoard0, bruckerBoard1]
  },
  {
    id: "3",
    name: "Wheel of JavaScript",
    icon: GiCartwheel,
    links: [
      {
        name: "Live",
        link: "https://mikebrucker.github.io/Wheel-Of-Fortune/",
        icon: GiCartwheel
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Wheel-Of-Fortune",
        icon: FaGithub
      }
    ],
    tech: ["JavaScript", "jQuery", "HTML", "CSS"],
    detail: [
      "This was my JavaScript Capstone project in school, the first 'big' JavaScript application I made. It can most definitely be improved but I would rather rebuild it instead. This was also the first time I ever used jQuery and I may have gotten a bit carried away with it :P. This project shows that I can learn at a very quick pace and build something that looks good and functions well.",
      "Event listeners listen for keyboard input but if you are on mobile you can click 'Guess Letter' to show a virtual keyboard",
      "On the Begin screen click the button or press 'B' to begin",
      "When spin button is shown click or press 'S' to spin",
      "When typing into the solve button input and before you spin, you can not accidentally guess a letter.",
      "Win 10 games to win your total bank.",
      "If you guess a wrong letter 10 times you lose."
    ],
    images: [wheelOfJavascript0, wheelOfJavascript1, wheelOfJavascript2]
  },
  {
    id: "4",
    name: "Blob Man",
    icon: GiTransparentSlime,
    links: [
      {
        name: "Live",
        link: "https://blob-man.mikebrucker.com",
        icon: GiTransparentSlime
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Blob-Man",
        icon: FaGithub
      }
    ],
    tech: ["JavaScript", "Phaser3", "Webpack", "Tiled"],
    detail: [
      "The first game I built was just one level of this Pac-Man clone game for a group project. In my free time I expanded it into a full game. I learned Phaser3, a JS game engine library, and built this game (the first level) in a span of ten days. Since then I've fixed bugs, added pause for the game and sounds, and added a custom start option if you just want to challenge yourself with tons of skeletons coming after you.",
      "You play as Blob-Man and you must collect all his blob children to pass the level.",
      "Skeleton enemies turn down corridors using a custom JavaScript function to randomize their direction.",
      "Skeletons increase in number every 2 levels.",
      "Skeletons increase in speed every level.",
      "Your scores are added to the bottom of the page after every game. They will disappear when you close down the page."
    ],
    images: [blobMan0, blobMan1, blobMan2]
  },
  {
    id: "5",
    name: "Tower Defense",
    icon: FaDragon,
    links: [
      {
        name: "Live",
        link: "https://tower-defense.mikebrucker.com",
        icon: FaDragon
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Tower-Defense",
        icon: FaGithub
      }
    ],
    tech: ["JavaScript", "Phaser3", "Webpack", "Tiled"],
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
    images: [towerDefense0]
  },
  {
    id: "6",
    name: "Blog in Gray",
    icon: FaBookDead,
    links: [
      {
        name: "Live",
        link: "https://blog-in-gray.herokuapp.com",
        icon: FaBookDead
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Rails-Blog",
        icon: FaGithub
      }
    ],
    tech: ["Ruby", "Rails", "PostgreSQL", "SQLite3"],
    detail: [
      "Blog written in Ruby on Rails. This application maintains a database of Users, Posts, and Comments. Features full CRUD functionality. With JavaScript, Users can edit their comments inline without redirecting to a new page."
    ],
    images: [blog0, blog1]
  },
  {
    id: "7",
    name: "Portfolio Site",
    icon: FaRegUser,
    links: [
      {
        name: "Live",
        link: "https://mikebrucker.com",
        icon: FaRegUser
      },
      {
        name: "Repo",
        link: "https://github.com/mikebrucker/Portfolio",
        icon: FaGithub
      }
    ],
    tech: ["React", "Material-UI", "Sass"],
    detail: [
      "This is my portfolio site that you are looking at already. Is this recursive or redundant?"
    ],
    images: [portfolio0, portfolio1, portfolio2]
  }
];
