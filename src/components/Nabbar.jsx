import { useState } from "react";
import { navItems } from "../constains/Index";
import { CiDark } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { navIcons } from "../constains/Index";

const Nabbar = () => {
  const [openMobileDroe, setOpenMobileDroe] = useState(false);

  const trigger = () => {
    setOpenMobileDroe(!openMobileDroe);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
      <div className="container relative px-4 mx-auto text-sm">
        <div className="flex items-center justify-between">
          <h1 className=" text-3xl font-bold">
            Nisal<span className="text-custom-red"> D</span>
          </h1>
          <ul className="hidden space-x-12 lg:flex  ml-14 ">
            {navItems.map((item, index) => (
              <li key={index} className="text-base">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        

          <div className="lg:hidden md:flex flex-col justify-end ">
          <button onClick={trigger}>
              {openMobileDroe ? < IoCloseSharp className="text-2xl"/> :<RiMenu3Fill className="text-2xl"/>}
            </button>
          </div>
        </div>
         {openMobileDroe && ( <div className="w-full flex  justify-center lg:hidden ">
            <div className="cursor-pointer fixed bottom-[-600px] navIcons flex gap-6   bg-slate-200/60 px-6 py-3 rounded-full backdrop-blur-lg">
            {navIcons.map((icon,index)=>(
                <a   key={index} href={icon.link} className="text-2xl ">
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
