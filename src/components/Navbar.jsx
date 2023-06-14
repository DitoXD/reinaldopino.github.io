import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-no-border.png";
import Resume from "../assets/Reinaldo Pino Resume 2023.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={scrollPosition > 250 ? "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300" : "fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300"} >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "75px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-30">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-10 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:scale-125 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-125 duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-125 duration-300">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-125 duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-125 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <div className="flex flex-row my-4">
          <li className="h-[60px] flex group justify-between items-center hover:scale-125 hover:rotate-90 duration-300 bg-blue-600">
            <a
              className="w-full flex justify-between items-center text-gray-300 group-hover:-rotate-90 duration-300"
              href="https://www.linkedin.com/in/reinaldo-pino-352350190"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="h-[60px] flex group justify-between items-center hover:scale-125 hover:rotate-90 duration-300  bg-[#333333]">
            <a
              className="w-full flex justify-between items-center text-gray-300 group-hover:-rotate-90 duration-300"
              href="https://github.com/DitoXD"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="h-[60px] flex group justify-between items-center hover:scale-125 hover:rotate-90 duration-300 bg-[#24ba1c]">
            <a
              className="w-full flex justify-between items-center text-gray-300 group-hover:-rotate-90 duration-300"
              href="mailto:reinaldopino4@gmail.com"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="h-[60px] flex group justify-between items-center hover:scale-125 hover:rotate-90 duration-300 bg-[#846f96]">
            <a
              className="w-full flex justify-between items-center text-gray-300 group-hover:-rotate-90 duration-300"
              href={Resume}
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </div>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://www.linkedin.com/in/reinaldo-pino-352350190"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://github.com/DitoXD"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24ba1c]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="mailto:reinaldopino4@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#846f96]">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
