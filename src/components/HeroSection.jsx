import React from "react";
import img from "../assets/pdf/PicsArt_08-24-06.47.47-removebg-preview.png";
import pdf from "../assets/pdf/NISAL DILRANGA (12).pdf";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeroSection = () => {
  
  return (
    <section id="home" className="flex flex-wrap-reverse dark:bg-black ">
      <div className="flex items-center justify-between w-full gap-40 mx-5 mt-24 lg:w-1/2">
        <div className="flex flex-col gap-4">
          <h4 className="text-base tracking-wide text-gray">
            Software Developer
          </h4>
          <h1 className="text-3xl lg:text-5xl racking-wide lfont-light dark:text-white">Hello, I'm</h1>
          <h1 className="text-3xl font-extrabold tracking-wide text-indigo-600 lg:text-5xl dark:text-neone-green">
            Nisal Dilranga
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-justify text-gray-700 lg:text-base dark:text-white">
            I am currently an undergraduate student at the Advanced
            Technological Institute in Kandy. I have hands-on experience with
            frontend web development, including experience with ReactJS and
            VanillaJS . I am also familiar with the MERN stack, Java, C#, Git
            and Github. I am a self motivated learner, adept at collaborative
            teamwork .I possess a positive mindset and a can-do attitude,
            consistently striving for excellence in my academic and professional
            pursuits.
          </p>
          <div className="flex items-center gap-14">
            <a
              href={pdf}
              download
              className="flex justify-center mt-8 lg:justify-normal"
            >
              <button className="border  border-indigo-600  text-indigo-600 font-semibold rounded-full w-[150px] h-10 text-sm hover:text-white hover:bg-indigo-600 lg:w-[200px] dark:border-neone-green dark:text-neone-green dark:hover:bg-neone-green dark:hover:text-white">
                Download Resume
              </button>
            </a>
            <div className="flex items-center gap-3 mt-8 text-2xl lg:gap-7 dark:text-white ">
              <a
                href="https://github.com/NisalDilranga/"
                className="dark:hover:text-neone-green hover:text-indigo-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/message/Fl3RV3AAS3YPM1"
                className="text-2xl lg:text-3xl hover:text-indigo-600 dark:hover:text-neone-green"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/nisal-dilranga-00a99b226/"
                className=" hover:text-indigo-600 dark:hover:text-neone-green"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/nisal.dilranga.1"
                className=" hover:text-indigo-600 dark:hover:text-neone-green"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] lg:ml-60  lg:mb-40 bg-indigo-400 dark:bg-yellow-800 overflow-hidden rounded-full mt-20 ml-40">
      <img src={img} width={""} alt="Circular Image" className="absolute  lg:w-[405px] lg:right-[130px] lg:top-[90px] w-[250px] top-[70px] right-[87px] "  />
</div>
    </section>
  );
};

export default HeroSection;
