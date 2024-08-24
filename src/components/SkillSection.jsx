import { details4 } from "../constains/Index";

const SkillSection = () => {
  return (
    <section id="SkillSection" className="relative h-auto mt-20 border-neutral-800 bg-bg_light_primary rounded-3xl dark:bg-black dark:text-white ">
      <div className="text-2xl font-semibold tracking-widest text-center text-indigo-600 lg:text-3xl dark:text-neone-green">
        <h1>Skills</h1>
      </div>
      <div className="flex flex-wrap mt-10 cursor-pointer lg:mt-20">
        {details4.map((detal, index) => (
          <div key={index} className="w-1/3 transition-transform duration-100 transform hover:scale-105 lg:w-1/5 ">
            <div className="flex flex-col gap-4 ">
              <div className="flex justify-center ">
              <img src={detal.logo} width={50} alt="" />
              </div>
            <div className="flex justify-center mb-10 ">
            <h1 className="hover:text-blue-800 , font-semibold text-sm lg:text-base dark:hover:text-neone-green">{detal.name}</h1>
            </div>
            
            </div>
          </div>
          
        ))}
       
      </div>
     
    </section>
  );
};

export default SkillSection;
