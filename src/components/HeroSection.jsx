import React from "react";
import img from "../assets/9dcaab18-cb73-4df4-891e-b89b4e3dd44d-removebg-preview.png"

const HeroSection = () => {
  return ( <section className="flex flex-wrap-reverse ">
    <div className="flex justify-between gap-40 items-center mt-24 mx-5 w-full lg:w-1/2">
      <div className="flex flex-col gap-4">
        <h4 className="tracking-wide text-lg text-gray-600">Software Developer</h4>
        <h1 className="text-5xl tracking-wide font-light">Hello, I'm</h1>
        <h1 className="text-5xl tracking-wide font-extrabold text-indigo-600">Nisal Dilranga</h1>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dolores labore rem ipsum reiciendis dolorem ratione aut a adipisci! 
          Beatae distinctio autem expedita at ut ab consequatur, fugit totam omnis!
        </p>
        <button className="border  border-indigo-600  text-indigo-600 font-bold rounded-full w-[200px] h-10 hover:text-white hover:bg-indigo-600">Download Resum</button>
      </div>
      
    </div>
       <div className=" ml-100">
       <img src={img} alt="" />
     </div>
     </section>
  );
};

export default HeroSection;
