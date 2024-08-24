import "./App.css";

import FooterSection from "./components/FooterSection";

import { useState, useEffect } from "react";
import { navItems } from "../src/constains/Index";
import { CiDark } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { navIcons } from "../../protfolio/src/constains/Index";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import HeroSection from "./components/HeroSection";
import Nabbar from "./components/Nabbar";
import ProjectSection from "./components/ProjectSection";
import QualificationSection from "./components/QualificationSection";
import SkillSection from "./components/SkillSection";
import SubHeroSection from "./components/SubHeroSection";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDrakMode = () => {
    setDarkMode(!darkMode);
  };
  const [openMobileDroe, setOpenMobileDroe] = useState(false);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const trigger = () => {
    setOpenMobileDroe(!openMobileDroe);
  };
  return (
    <div className={` dark:bg-black ${darkMode && "dark"}`}>
      <div className=" dark:bg-black">
        <nav
          className={`sticky top-0 z-50 py-3   backdrop-blur-lg  ${
            shadow ? "shadow-2xl" : ""
          }`}
        >
          <div className="container relative px-4 mx-auto text-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-widest dark:text-white">
                Nisal
                <span className="text-indigo-500 dark:text-neone-green">
                  {" "}
                  D
                </span>
              </h1>
              <ul className="hidden space-x-12 lg:flex ml-14 ">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-base dark:text-white hover:text-indigo-600 dark:hover:text-neone-green"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <button onClick={toggleDrakMode}>
                  {darkMode ? (
                    <MdLightMode className="text-2xl text-white dark:hover:text-neone-green " />
                  ) : (
                    <MdDarkMode className="text-2xl hover:text-indigo-600 " />
                  )}
                </button>
              </ul>

              <div className="flex items-center justify-around gap-9 lg:hidden md:flex">
                <button onClick={toggleDrakMode}>
                  {darkMode ? (
                    <MdLightMode className="text-2xl text-white dark:hover:text-neone-green hover:text-indigo-600" />
                  ) : (
                    <MdDarkMode className="text-2xl dark:hover:text-neone-green hover:text-indigo-600 " />
                  )}
                </button>
                <button onClick={trigger} className="">
                  {openMobileDroe ? (
                    <IoCloseSharp className="text-2xl dark:text-white dark:hover:text-neone-green hover:text-indigo-600" />
                  ) : (
                    <RiMenu3Fill className="text-2xl dark:text-white dark:hover:text-neone-green hover:text-indigo-600" />
                  )}
                </button>
              </div>
            </div>
            {openMobileDroe && (
              <div className="flex justify-center w-full lg:hidden ">
                <div className="cursor-pointer fixed bottom-[-650px]  flex gap-6  bg-blue-gray-500  px-6 py-3 rounded-full backdrop-blur-lg">
                  {navIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.link}
                      className="text-2xl hover:text-white "
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="px-6 mx-auto max-w-7xl">
          <HeroSection />
          <SubHeroSection />
          <SkillSection />
          <QualificationSection />
          <ProjectSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
