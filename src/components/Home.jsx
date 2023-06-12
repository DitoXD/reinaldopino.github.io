import React from "react";
import profilePic from '../assets/profile-pic-no-background-50-flip.png';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div style={{opacity:"1.0"}} className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#1abbec]">Welcome! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Reinaldo Pino
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a <span className="text-white">Full Stack Developer</span>.
        </h1>
        <p className="text-gray-300 py-7 max-w-[700px]">
          I'm a full-stack developer who loves to create efficient, fully
          functional applications to satisfy the digital needs of clients. My
          current focus is improving my design skills to provide a better user
          experience on the platforms I create.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1abbec] hover:border-[#1abbec] duration-200">
              View Projects
              <span className="group-hover:rotate-90 group-hover:translate-x-[10px] group-hover:translate-y-[-5px] duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
