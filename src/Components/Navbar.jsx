import React, { useState } from 'react';
import logo from '../assets/K.png';
import { Link } from 'react-scroll';
import menu from '../assets/menu-icon.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };


  window.addEventListener('scroll',()=>{
    
  })

  return (
    <div className="fixed z-[999] w-full px-6 md:px-20 md:py-4 font-['Mont'] flex justify-between bg-zinc-900 md:bg-transparent">
      {/* Logo */}
      <div className="logo w-12 h-12">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Links */}
      <div className={`hidden md:flex  gap-10`}>
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <div className="group" key={index}>
            <Link
              to={item.toLowerCase()} 
              smooth={true} 
              duration={500} 
              className={`md:text-lg md:font-light  capitalize cursor-pointer md:pb-2 group-hover:border-b-[.5px] ${index === 3 && "ml-32"}`}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>


      <div className="md:hidden flex items-center">
        <img
          src={menu}
          className="menu-icon w-8 h-8 cursor-pointer"
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>

    
      <div
        className={`${
          mobileMenu ? 'block' : 'hidden'
        } absolute top-full h-[100vh] left-0 w-full bg-[#18181B] text-center md:hidden flex-col gap-4 md:py-4`}
      >
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <div className="group py-2" key={index}>
            <Link
              to={item.toLowerCase()}
              smooth={true} 
              duration={500} 
              className="md:text-lg text-[36px] font-light capitalize cursor-pointer block"
              onClick={() => setMobileMenu(false)} 
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
