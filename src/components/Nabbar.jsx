import { useState , useEffect } from "react";
import { navItems } from "../constains/Index";
import { CiDark } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { navIcons } from "../constains/Index";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Nabbar = () => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const trigger = () => {
    setOpenMobileDroe(!openMobileDroe);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3   backdrop-blur-lg  ${shadow ? 'shadow-2xl' : ''}`}>
      <div className="container relative px-4 mx-auto text-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold ">
            Nisal<span className="text-custom-red"> D</span>
          </h1>
          <ul className="hidden space-x-12 lg:flex ml-14 ">
            {navItems.map((item, index) => (
              <li key={index} className="text-base">
                <a href={item.href}>{item.label}</a>
                
              </li>
            ))}
           <MdDarkMode className="text-2xl"/>
          </ul>
          
        

          <div className="flex items-center justify-around gap-9 lg:hidden md:flex">
          <MdDarkMode className="text-2xl"/>
          <button onClick={trigger} className="">
         
              {openMobileDroe ? < IoCloseSharp className="text-2xl"/> :<RiMenu3Fill className="text-2xl"/>}
              
            </button>
          </div>
        </div>
         {openMobileDroe && ( <div className="flex justify-center w-full lg:hidden ">
            <div className="cursor-pointer fixed bottom-[-650px] navIcons flex gap-6  bg-gray-800  px-6 py-3 rounded-full backdrop-blur-lg">
            {navIcons.map((icon,index)=>(
                <a   key={index} href={icon.link} className="text-2xl hover:text-white ">
                    {icon.icon}
                </a>
            ))}
            </div>
         </div>
         )}
      </div>
    </nav>
  );
};

export default Nabbar;
