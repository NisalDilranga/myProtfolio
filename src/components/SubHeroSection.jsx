import { details } from "../constains/Index";

const SubHeroSection = () => {
  return (
    <section className="flex items-center justify-center mt-20 cursor-pointer ">
      <br />
      {details.map((detail, index) => (
        
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/3"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="text-xl font-bold lg:text-4xl dark:text-neone-green">{detail.number}</div>
            <div>
              <h1 className="text-[10px] lg:text-xl pr-4 dark:text-white">{detail.detail}</h1>
            </div>
          </div>
          <br /><br /><br /><br />
          <hr className="border-black dark:border-white " />
        </div>
        
      ))}

    
    </section>
  );
};

export default SubHeroSection;
