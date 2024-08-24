import { FaHome } from "react-icons/fa";
import { FaDiagnoses } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { MdContactless } from "react-icons/md";

import figma from "../assets/Skills/figma.png";
import sketch from "../assets/Skills/tailwindcss.svg";
import js from "../assets/Skills/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667.svg";

import ps from "../assets/Skills/ps.png";
import reactjs from "../assets/Skills/react.png";
import nodejs from "../assets/Skills/node.png";
import java from "../assets/Skills/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176612d6f726967696e616c2d776f72646d61726b2e737667.svg";
import img1 from "../assets/project/Screenshot (196).png"
import img2 from "../assets/project/Screenshot (293).png"
import img3 from "../assets/project/Screenshot (331).png"
import img4 from "../assets/project/Screenshot (344).png"
import img5 from "../assets/project/Screenshot (345).png"
import img6 from "../assets/project/Screenshot (349).png"
import img7 from "../assets/project/Screenshot (354).png"

import c from "../assets/Skills/c.svg";
import css from "../assets/Skills/css.svg";
import fb from "../assets/Skills/fb.png";
import git from "../assets/Skills/git.svg";
import html from "../assets/Skills/html.svg";
import md from "../assets/Skills/md.svg";
import sql from "../assets/Skills/sql.svg";
import lv from "../assets/Skills/lra.svg";
import php from "../assets/Skills/php.svg";


export const navItems = [
    { label: "Home", href: "#" },
    { label: "Skills", href: "#SkillSection" },
    { label: "Qualification", href: "#QualificationSection" },
    { label: "Projects", href: "#ProjectSection" },
    { label: "ContuctUs", href: "#footer" },
  ];

  export const navIcons =[

{icon : <FaHome/>, link:"#"},
{icon : <FaDiagnoses />, link:"#SkillSection"},
{icon : <MdHighQuality/>, link:"#QualificationSection"},
{icon : <AiFillProject/>, link:"#ProjectSection"},
{icon : <MdContactless/>, link:"#footer"},

  ]
  export const details =[
    {number:"1" ,detail:"YEARS OF EXPERIENCE"},
    {number:"10+" ,detail:"COMPLETED WEB APPS"},
    {number:"5" ,detail:"TEAM MEMBERS"},
 
  ]
  export const details4 = [
   
        {
          name: "Figma",
          para: "Lorem ipsum text dummy",
          logo: figma,
        },
        {
          name: "Node.js",
          para: "Lorem ipsum text dummy",
          logo: nodejs,
        },
        {
          name: "Adobe Photoshop",
          para: "Lorem ipsum text dummy",
          logo: ps,
        },
        {
          name: "React.js",
          para: "Lorem ipsum text dummy",
          logo: reactjs,
        },
       
        {
          name: "Java",
          para: "Lorem ipsum text dummy",
          logo: java,
        },
        {
          name: "JavaScript",
          para: "Lorem ipsum text dummy",
          logo: js,
        },
        {
          name: "C#",
          para: "Lorem ipsum text dummy",
          logo: c,
        },
        {
          name: "CSS",
          para: "Lorem ipsum text dummy",
          logo: css,
        },
        {
          name: "FireBase",
          para: "Lorem ipsum text dummy",
          logo: fb,
        },
        {
          name: "Git",
          para: "Lorem ipsum text dummy",
          logo: git,
        },
        {
          name: "MongoDB",
          para: "Lorem ipsum text dummy",
          logo: md,
        },
        {
          name: "Laravel",
          para: "Lorem ipsum text dummy",
          logo: lv,
        },
        {
          name: "MySQL",
          para: "Lorem ipsum text dummy",
          logo: sql,
        },
        {
          name: "HTML",
          para: "Lorem ipsum text dummy",
          logo: html,
        },
        {
          name: "PHP",
          para: "Lorem ipsum text dummy",
          logo: php,
        },
        {
          name: "TailWind Css",
          para: "Lorem ipsum text dummy",
          logo: sketch,
        },
      ]
  
      export const images = [
         
        {uri:img2,link:"https://nisaldilranga.github.io/Ticketpr/" ,name:"TicketPro - Season Ticket Management System",state:" Finished",cname:"h-full w-full object-cover"},
        {uri:img6,alt:"img3",cname:"h-full w-full object-cover",link:"https://art-gallery-induwa.netlify.app/",name:"Project - Portfolio (Sri Lankan Client)",state:"Finished"},
        {uri:img7,alt:"img2",cname:"h-full w-full object-cover",link:"https://www.theikone.com/#/",name:"E Commerce web app (Sri Lankan Client) Domain - The Ikone",state:" Finished"},
        {uri:img4,alt:"img2",cname:"h-full w-full object-cover",link:"https://github.com/NisalDilranga/Product_Comparing_page",name:"Product comparing app",state:" Finished "},
        {uri:img3,alt:"img3",cname:"h-full w-full object-cover",link:"https://click-cart2.netlify.app/",name:"ClickCart - e commerce web app(SlIATE Kandy)",state:"OnWorking"},
        {uri:img1,alt:"img3",cname:"h-full w-full object-cover",link:"https://github.com/NisalDilranga/Stock-Management-System",name:"Stock Management System(SlIATE Kandy)",state:"Finished"},
        {uri:img5,alt:"img3",cname:"h-full w-full object-cover",link:"https://counter-master.netlify.app/",name:"Simple Counter Application",state:"Finished"},
        {uri:img6,alt:"img3",cname:"h-full w-full object-cover",link:"https://art-gallery-induwa.netlify.app/",name:"Project - Portfolio (Sri Lankan Client)",state:"Finished"},
      ]
      export const projects = [
        {name:"Project - E Commerce web app (Sri Lankan Client) Domain - The Ikone",link:"https://www.theikone.com/#/",satck:"Tech Stack - Figma | Photoshop | React | JavaScript",pd:"I worked as a designer to create an e-commerce web app forThe Ikone, a clothing brand in Sri Lanka. This was a teamproject where I collaborated with other members. As adesigner, I gained valuable experience in working underpressure, time management, and system analysis."},
        {name:"Project - Portfolio (Sri Lankan Client) ",link:"https://github.com/NisalDilranga/Art-Gallery",satck:"Tech Stack - HTML | CSS | React | JavaScript",pd:"This site designed for a oil painting artist.With this project I was able to gain more experience in project analysis and resourse collection."},
        {name:"TicketPro - Season Ticket Management System(SlIATE Kandy)",link:"https://github.com/NisalDilranga/Ticketpr",satck:"Tech Stack - Figma | JavaScript |HTML | CSS",pd:"I was involved in a 1st-year project to develop a monthly seasonticket anagement system using HTML, CSS, JavaScript, Figma,and Firebase"},
        {name:"Stock Management System(SlIATE Kandy)",link:"https://github.com/NisalDilranga/Stock-Management-System",satck:"Tech Stack - Figma | JAVA | MVC | MYSQL",pd:"I participated in a 2nd-year project to develop astock management system using Java, focusing onOOP concepts and he MVC architecture."},
        {name:"Product comparing app",link:"https://github.com/NisalDilranga/Product_Comparing_page",satck:"Tech Stack - MongoDB | NodeJS | React | JavaScript",pd:"I built a simple product comparison page using the MERN stack."},
        {name:"ClickCart - e commerce web app(SlIATE Kandy)",link:"https://github.com/NisalDilranga/ClickCart",satck:"Tech Stack - Figma | Photoshop | MERN | JavaScript",pd:"I was involved in a 2nd-year project to create an ecommerce web application using the MERN stack,along with HTML, CSS, and Figma."},
       
      ]
