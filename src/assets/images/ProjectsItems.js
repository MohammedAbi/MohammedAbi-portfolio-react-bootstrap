import Project1Img from "./project-01.png";
import Project2Img from "./CommunityScienceMuseum.png";
import Project3Img from "./project-03.png";

const ProjectsItems = [
  {
    id: 1,
    projectImg: Project1Img,
    projectTitle: "JavaScript 1 - Course Assignmente",
    projectDescription:
      "This project involves using JavaScript to create an interactive online store that displays products from an API endpoint to fetch and display products in HTML, allowing users to add items to their basket and proceed through the checkout process.",
    githubUrl:
      "https://github.com/NoroffFEU/html-css-course-assignment-MohammedAbi.git",
    demoUrl: "https://js-course-assignment-mohammedabi.netlify.app/",
  },
  {
    id: 2,
    projectImg: Project2Img,
    projectTitle: "Semester-Project",
    projectDescription:
      "The aim of this project is to use our knowledge of project planning, web design and development to complete the brief in the available time. An interactive science museum called the Community Science Museum is opening soon near our location. Its core target audience is primary and middle school children (ages 7-15) and families with young children.",
    githubUrl: "https://github.com/MohammedAbi/Semester-Project-1.git",
    demoUrl: "https://communitysciencemuseum-mohammedabi.netlify.app/",
  },
  {
    id: 3,
    projectImg: Project3Img,
    projectTitle: "Weather App",
    projectDescription:
      "This weather app allows users to check the current weather conditions for any city around the world. It utilizes the OpenWeatherMap API to fetch weather data based on the city entered by the user. The app provides information such as temperature, humidity, and wind speed.",
    githubUrl: "https://github.com/MohammedAbi/Weather-App.git",
    demoUrl: "https://weather-app-mohammedabi.netlify.app/",
  },
];

export default ProjectsItems;
