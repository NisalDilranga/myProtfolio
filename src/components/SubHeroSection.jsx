import { details } from "../constains/Index";

const SubHeroSection = () => {
  return (
    <section className="flex  justify-center  cursor-pointer items-center mt-20 ">
      <br />
      {details.map((detail, index) => (
        
        <div
          key={index}
          className="w-full  sm:w-1/2 lg:w-1/3"
        >
          <div className="flex gap-3 justify-center items-center">
            <div className="text-xl  font-bold lg:text-4xl">{detail.number}</div>
            <div>
              <h1 className="text-[10px] lg:text-xl">{detail.detail}</h1>
            </div>
          </div>
          <br /><br /><br /><br />
          <hr className=" border-black" />
        </div>
        
      ))}

    
    </section>
  );
};

export default SubHeroSection;
