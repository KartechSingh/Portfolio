import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import KG from '../assets/KG.png';
import resume from '../assets/KartikeyFullstack.pdf';
import '../Css/LandingPage.css'


const LandingPage = () => {
  return (
    <div data-scroll-section data-scroll-speed='-.3' className=" w-full min-h-screen   bg-zinc-900 md:pt-1" id="home">
      <div className="textstructure pt-[15vh] px-[2vw] md:mt-32 md:px-10">
        {[
          "Crafting seamless",
          "dynamic web experiences",
          "with innovative code.",
        ].map((item, index) => {
          return (
            <div key={index} className="masker font-merriweather">
              <div className="pl-[4vw] w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] mt-[3px]  lg:w-[32px] lg:mt-3 lg:mr-[1vw] bg-[#004D43]"
                  >
                    <img className="bg-cover h-[18px]  lg:h-[3.8vw]" src={KG} alt="" />
                  </motion.div>
                )}
                <h1
                  className="uppercase text-[28px] lg:text-[6vw] lg:leading-[5.5vw] font-semibold tracking-normal"
                  style={{ fontFamily: "Grot" }}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:border-t-[2px] border-zinc-800 md:mt-[23vh] flex flex-col md:flex-row mt-32 gap-8 justify-between lg:px-8 py-1 items-center">
        {["Kartikey Singh", "Frontend Engineer"].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2 group">
          <div className="px-4 py-2 rounded-full border-[1px] group-hover:bg-zinc-100 group-hover:font-light group-hover:text-zinc-950 border-zinc-700 text-sm font-light">
            <a className="button" href={resume} download>Download Resume</a>
          </div>
          <div className="hidden md:visible arrow rounded-full border-[1px] w-9 h-9 md:flex justify-center items-center">
            <span className="rotate-[45deg] group-hover:rotate-[-45deg] ">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
