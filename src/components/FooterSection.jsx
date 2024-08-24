import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdCopyright } from "react-icons/md";
const FooterSection = () => {
  return (
    <section id='footer' className='relative mt-20 h-[400px] w-400 border-neutral-800 bg-bg_light_primary rounded-3xl dark:bg-black dark:text-white'>
  <hr className='mb-20' />
    <div className="flex flex-col items-center">
        <div className="text-xl lg:text-2xl">
            <h1 className='font-bold dark:text-neone-green'>Nisal Dilranga</h1>
           
        </div>
        <div className="text-base lg:text-x1">
        <p className='mt-5 font-semibold'>Software Developer</p>
        </div>
        <div className="flex mt-5 text-sm">
            <div className="">
                <h1>Email : dilranganisal@gmail.com  <span className='px-4'>|</span> </h1>
            </div>
            <div className="">
                <h1>Mobile : +9475 549 3516</h1>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 text-xl lg:text-2xl">
        <a
                href="https://github.com/NisalDilranga/"
                className=" hover:text-indigo-600 dark:hover:text-neone-green"
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
        <div>
            <h1 className="flex items-center gap-1 mt-20 text-xs "><MdCopyright />Copyrights NisalDilranga. All Rights Reserved</h1>
        </div>
    </div>
    </section>
  )
}

export default FooterSection