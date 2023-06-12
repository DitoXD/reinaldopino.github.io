import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/Reinaldo Pino Resume 2023.pdf";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1080px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1080px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold">
            <p className="text-4xl">
              Who is... <span className="text-[#1abbec]">Reinaldo Pino</span>?
            </p>
          </div>
          <div>
            <p>
              I'm a graduate of the University of Technology of Jamaica with a
              Bachelors in Computer Science. I am passionate about developing
              high quality software consistently and continue to do so while
              maintaining a high standard of professionalism. I communicate well
              with others and exude charismatic qualities to show I blend in
              well with teams of varying sizes. To see more details about me,
              please see my resume below or contact me to schedule an interview.
            </p>
          </div>
        </div>
        <div>
          <a href={Resume}>
            <div className="z-0 mt-8 md:mt-16">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1abbec] hover:border-[#1abbec] duration-200">
                Download Resume
                <span className="duration-300">
                  <BsFillPersonLinesFill className="ml-3" />
                </span>
              </button>
            </div>
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
