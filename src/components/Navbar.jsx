import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";

import { navLinks, resume } from "../constants"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showToast, setShowToast] = useState(false); // Toast state
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);

    if (nav.id === "skills") {
      navigate("/skills");
      window.scrollTo(0, 0);
    } 
    else if (nav.id === "projects") {
      navigate("/project-details"); 
      window.scrollTo(0, 0);
    } 
    else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(nav.id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(nav.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative'>
        
        {/* LOGO SECTION */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className='w-10 h-10 rounded-full bg-[#915EFF] flex justify-center items-center shadow-lg border-2 border-white/20'>
            <span className='text-white font-black text-[20px]'>V</span>
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Vismaya &nbsp;
            <span className='sm:block hidden'> | Full-Stack Developer</span>
          </p>
        </Link>

        {/* DESKTOP MENU + DOWNLOAD BUTTON */}
        <div className='hidden sm:flex flex-row items-center gap-10'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks?.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => handleNavClick(nav)}
              >
                <span>{nav.title}</span>
              </li>
            ))}
          </ul>

          <a 
            href={resume} 
            download="vismaya_Resume.pdf" 
            onClick={handleDownload} // 2. TRIGGER THE TOAST HERE
            className='bg-[#915EFF] py-2 px-5 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-105 transition-all duration-300'
          >
            Download CV
          </a>
        </div>

        {/* TOAST NOTIFICATION */}
        {showToast && (
          <div className='absolute top-20 right-0 bg-[#915EFF] text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce border border-white/20 z-50'>
            <span className='font-bold'>✅ Download Started!</span>
          </div>
        )}

        {/* MOBILE MENU */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className='text-white font-medium cursor-pointer text-[28px] z-30'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "✕" : "☰"} 
          </div>

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl border border-white/10 shadow-2xl flex-col`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks?.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav)}
                >
                  <span>{nav.title}</span>
                </li>
              ))}
              {/* Added CV option to mobile menu */}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a href={resume} download="Vismaya_Resume.png" onClick={handleDownload}>Download CV</a>
              </li>
            </ul>
          </div>
        </div>      
      </div>
    </nav>
  );
};

export default Navbar;