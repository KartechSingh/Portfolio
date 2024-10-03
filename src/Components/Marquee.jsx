import React from "react";
import { motion } from "framer-motion";
import imagesArray from "../img";

const Marquee = () => {
 
  const totalWidth = imagesArray.length * 218; 

  return (
    <div  data-scroll-section data-scroll-speed='.-2' className="md:w-full md:py-10  bg-[#004D43] md:rounded-tl-3xl md:rounded-tr-3xl overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${totalWidth}px` }} 
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 8,
        }}
        style={{ display: "flex", width: `${totalWidth * 2}px` }} 
      >
       
        {imagesArray.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <img className="h-[218px]  w-auto" src={item.src} alt={item.alt} />
          </div>
        ))}

       
        {imagesArray.map((item, index) => (
          <div key={index + imagesArray.length} className="md:flex-shrink-0 flex-shrink-1">
            <img className="h-[218px] md:w-auto" src={item.src} alt={item.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
