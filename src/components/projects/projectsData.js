// Get SVG icons for tech
import blog1 from "../../images/blog1.png";
import blobMan from "../../images/blob-man.png";
import towerDefense from "../../images/tower-defense.png";
import wheelOfJavascript from "../../images/wheel-of-javascript.png";
import rostered1 from "../../images/rostered1.png";
import rostered2 from "../../images/rostered2.png";
import rostered3 from "../../images/rostered3.png";
import rostered4 from "../../images/rostered4.png";
import rostered5 from "../../images/rostered5.png";
import {
  FaHockeyPuck,
  FaBookDead,
  FaGithub,
  FaLinkedin,
  FaJsSquare,
  FaReact
} from "react-icons/fa";
import { GiCartwheel, GiMagicGate, GiTransparentSlime } from "react-icons/gi";

export const aboutMe = {
  name: "Mike Brucker",
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
    }
  ]
};

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
    detail:
      "Rostered is an app which features full CRUD functionality that I built to keep track of all of the hockey teams I play on, including the players, games, and schedules. It is written in React, utilizes Redux for state managemant, and uses Google Firebase's data storage Firestore for the back-end. This single page app nests many components to add, edit, and delete each piece of data. Each component is initially hidden until you click the corresponding button.",
    images: [rostered1, rostered2, rostered3, rostered4, rostered5]
  },
  {
    id: "2",
    name: "Wheel of JavaScript",
    icon: GiCartwheel,
    links: {
      live: "http://mikebrucker.com/Wheel-Of-Fortune/",
      repo: "https://github.com/mikebrucker/Wheel-Of-Fortune"
    },
    tech: ["Javascript", "jQuery", "HTML/CSS"],
    detail: "Wheel of fortune Capstone project",
    images: [wheelOfJavascript]
  },
  {
    id: "3",
    name: "Tower Defense",
    icon: GiMagicGate,
    links: {
      live: "https://tower-defense.mikebrucker.com",
      repo: "https://github.com/mikebrucker/Tower-Defense"
    },
    tech: ["Javascript", "Phaser3", "Webpack", "Tiled"],
    detail:
      "Tower Defense Game. Fixed path version and enemy finds it's own path version.",
    images: [towerDefense]
  },
  {
    id: "4",
    name: "Blob-Man",
    icon: GiTransparentSlime,
    links: {
      live: "https://blob-man.mikebrucker.com",
      repo: "https://github.com/mikebrucker/Blob-Man"
    },
    tech: ["Javascript", "Phaser3", "Webpack", "Tiled"],
    detail:
      "Blob-Man, a Pac-Man clone game created with Phaser3. Blob-man must collect his colorful children while avoiding the skeletons. Each level the skeletons grow in numbers and speed.",
    images: [blobMan]
  },
  {
    id: "5",
    name: "Blog in Gray",
    icon: FaBookDead,
    links: {
      live: "https://blog-in-gray.herokuapp.com",
      repo: "https://github.com/mikebrucker/Rails-Blog"
    },
    tech: ["Ruby", "Rails", "Ruby on Rails", "Postgres", "SQLite3"],
    detail:
      "Blog written in Ruby on Rails. This application maintains a database of Users, Posts, and Comments. Features full CRUD functionality. With JavaScript, Users can edit their comments inline without redirecting to a new page.",
    images: [blog1]
  }
];
