import React from "react";
import PR1 from "../assets/PR1.png";
import PR2 from "../assets/PR2.jpg";

const Projects = () => {
  return (
    <div className="md:py-20 pt-8 pb-20 w-full bg-[#004D43] rounded-t-lg" id="projects">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 md:pb-16 pb-10">
        <h1 className="md:text-6xl text-[32px] font-[Mont] tracking-tight pt-5">Projects</h1>
      </div>
      <div className="md:px-20 px-10">
        <div className="cards w-full flex flex-col md:flex-row md:gap-10 gap-[6rem] mt-10">
       
          <div className="relative group cardcontainer md:w-1/2 md:h-[65vh] width-[90vh] h-[40vh] ">
            
            <div className="card w-full h-full overflow-hidden rounded-xl transition-transform duration-100 transform group-hover:scale-95">
              <img className="w-full h-full bg-cover" src={PR1} alt="" />
            </div>
            <div className="links flex justify-center gap-4 md:py-4 py-8 px-14">
              <div className="border-[1px] rounded-full px-3">
                <a href="https://creative-sunshine-82c733.netlify.app/" target="_blank">LINK</a>
              </div>
              <div className="border-[1px] rounded-full px-3">
                <a href="https://github.com/KartechSingh/Food-del" target="_blank">GITHUB</a>
              </div>
            </div>
          </div>

         
          <div className="relative group cardcontainer md:w-1/2 md:h-[65vh] width-[90vh] h-[40vh]">
           
            <div className="card w-full h-full overflow-hidden rounded-xl transition-transform duration-100 transform group-hover:scale-95">
              <img className="w-full h-full bg-cover" src={PR2} alt="" />
            </div>
            <div className="links flex justify-center gap-4 md:py-4 py-8 px-14">
              <div className="border-[1px] rounded-full px-3">
                <a href="https://gulshanone29.info/" target="_blank" >LINK</a>
              </div>
              <div className="border-[1px] rounded-full px-3">
                <a href="https://github.com/KartechSingh/Website-Mall" target="_blank">GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
