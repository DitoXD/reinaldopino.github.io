import React from "react";
import Youtube from "../assets/youtube-logo.png";
import TicTacToe from "../assets/tic-tac-toe.png";

const Projects = () => {
  return (
    <div name="projects" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec] ">
            Projects
          </p>
          <p className="py-4">
            Any projects that you might be looking for are private. Ask me about
            them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4" >

          <div style={{ backgroundImage: `url(${Youtube})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Youtube Converter
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/DitoXD/YoutubeConverter1.0">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${TicTacToe})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic Tac Toe GUI w/ AI 
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/DitoXD/tictactoe-pygame">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
