import React from "react";
import {  Typography, Button } from "@material-tailwind/react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { images } from "../constains/Index";
import { Carousel ,IconButton} from "@material-tailwind/react";

const ProjectSection = () => {
  return (
    <div id="ProjectSection" className="flex flex-col items-center justify-center dark:text-white">
      <div className="mt-20 text-3xl font-semibold tracking-widest text-center text-indigo-600 dark:text-neone-green">
        <h1>Projects</h1>
      </div>
    
      <Carousel  autoplay={true} loop={true} className="rounded-xl w-[400px] text-black lg:w-[800px] mt-10" prevArrow={({ handlePrev }) => (
        
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )
      
    }
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
      {images.map((image, index) => (
          <div key={index} className="dark:text-white">
           <div className="">
           <img src={image.uri}  alt={image.alt} className={image.cname} />
           </div>
           <div>
            <div className="flex flex-col items-center justify-center gap-3 mt-20 text-sm lg:text-xl">
            <h1>{image.name}</h1> <br />
            <h1>Status : {image.state}</h1>
            </div>
            <a href= {image.link} className="flex items-center gap-4 mt-10 text-sm font-semibold lg:text-xl hover:text-custom-red ">
                
            <h1 >Find Projects</h1>
            <HiOutlineArrowSmRight />
            
            </a>
         
           </div>
          </div>
          
        ))}
    </Carousel>
      
    </div>
  );
};

export default ProjectSection;
