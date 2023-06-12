import React from "react";

import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Flutter from "../assets/flutter.png";
import Python from "../assets/python.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec] ">
            Skills
          </p>
          <p className="py-4">
            These are the Languages and Frameworks I've worked with and there
            will be others pending.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Flutter} alt="Flutter Icon" className="w-20 mx-auto" />
            <p className="my-4">Flutter</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React Icon" className="w-20 mx-auto" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Node} alt="Node Icon" className="w-20 mx-auto" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Python} alt="Python Icon" className="w-40 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JavaScript} alt="JavaScript Icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GitHub} alt="GitHub Icon" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind Icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Html} alt="HTML Icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
