import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { projects } from "../constains/Index";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const QualificationSection = () => {
  return (
    <section id="QualificationSection" className="flex flex-col justify-center dark:text-white">
      <hr className="mt-20 border-black dark:border-white " />
      <div className="mt-20 text-2xl font-semibold tracking-widest text-center text-indigo-600 lg:text-3xl dark:text-neone-green">
        <h1>Qualification</h1>
        
      </div>
      <div className="flex items-center justify-center gap-3 text-xl mt-11">
     
      < MdOutlineCastForEducation/> 
      <p className="text-lg lg:text-xl">Education</p>
      </div>
      <div className="flex flex-wrap justify-around gap-8 mt-10 text-center ">
        <div className="text-sm lg:text-lg">
          <h2 className="my-4">Higher National Diploma In Information Technology</h2>
          <p className="text-neutral-500">2022 - 2024 | <span className="text-transparent bg-custom-red bg-clip-text">SLIATE kandy</span></p>
          <p className="text-neutral-500">GPA : 3.71</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="text-sm lg:text-lg">
            {" "}
            <h2 className="my-4">G.C.E Advanced Level</h2>
            <p className="text-neutral-500">2018 | <span className="text-transparent bg-custom-red bg-clip-text">Delta Gemunupura College</span></p>
            <p className="text-neutral-500">Commerce</p>
          </div>
          <div className="text-sm lg:text-lg">
            {" "}
            <h2 className="my-4">G.C.E Advanced Level</h2>
            <p className="text-neutral-500">2018 | <span className="text-transparent bg-custom-red bg-clip-text">Delta Gemunupura College</span></p>
            <p className="text-neutral-500">Commerce</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-xl mt-11">
     
      < GrUserExpert/> 
      <p className="text-lg lg:text-xl"> Experience</p>
      </div>
      <div className="mt-10">
        {projects.map((project,index)=>(
          <div key={index} className="">
            <div className="flex flex-col mt-10">
              <a href={project.link}><h1 className="mb-3 text-lg font-semibold lg:text-lg dark:hover:text-custom-red dark:text-neone-green hover:text-custom-red">{project.name}</h1></a>
              <p className="text-base">{project.satck}</p>
              <p className="mt-5 text-sm text-wrap"> <li>{project.pd}</li></p>
            </div>
           
          </div>
          
        ))}
      </div>
      <a href= 'https://github.com/NisalDilranga?tab=repositories' className="flex items-center gap-4 mt-10 text-sm font-semibold lg:text-base hover:text-custom-red">
                
                <h1>View All Projects</h1>
                <HiOutlineArrowSmRight/>
                
                </a>
      <hr className="mt-20 border-black dark:border-white" />
    </section>
  );
};

export default QualificationSection;
