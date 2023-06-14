import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import sectionBg from "../assets/vscode.jpg"



const Home = () => {
  return (
    <div name="home" style={{backgroundImage: `url(${sectionBg})`}} className="w-full h-screen bg-cover bg-fixed bg-center">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#1abbec]">Welcome! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Reinaldo Pino
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300 underline">
          I'm a <span className="text-[#1abbec]">Full Stack Developer</span>.
        </h1>
        <p className="text-white my-4 py-3 max-w-[700px] bg-black bg-opacity-30">
          I'm a full-stack developer who loves to create efficient, fully
          functional applications to satisfy the digital needs of clients. My
          current focus is improving my design skills to provide a better user
          experience on the platforms I create.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex font-bold items-center bg-black bg-opacity-70 hover:bg-[#1abbec] hover:bg-opacity-100 hover:border-[#1abbec] duration-200">
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
