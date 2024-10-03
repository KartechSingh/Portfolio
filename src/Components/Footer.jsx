import { span } from "framer-motion/client";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full  h-screen bg-zinc-900 md:flex  gap-8 md:p-32 py-12"
      id="contact"
      style={{ fontFamily: "Grot" }}
    >
      <div className="heading flex flex-col md:w-1/2 w-[60vw] ml-4  md:gap-1 gap-4 ">
        <h1 className="md:text-[4vw]  text-[44px] uppercase font-semibold  -mb-10">
          Connect
        </h1>
        <h1 className="md:text-[4vw] md:border-b-[1px] pb-4 text-[44px] uppercase font-semibold  -mb-10">
          With me
        </h1>
      </div>

      {/* <div className="w-1/2"> */}
        <div className="mt-16 md:ml-32 ml-16">
          <h1 className="md:text-[4vw] text-[24px]  uppercase font-semibold leading-none ">
            Socials
          </h1>
          <div className="flex flex-col md:pl-8 gap-4 pt-4 md:pt-20 tracking-wider">
            S.
            {[
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/kartechsingh/",
              },
              { name: "Github", url: "https://github.com/KartechSingh" },
              { name: "Twitter", url: "https://x.com/KartechSingh" },
              {
                name: "Instagram",
                url: "https://www.instagram.com/ig_kaartik?igsh=MWYwYnE5ajVkbjk3dQ==",
              },
            ].map((item, index) => {
              return (
                <span>
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </span>
              );
            })}
          </div>
          <div className="mail pt-8 md:pt-24">
            E.
            <h4 className="md:text-2xl ">Singhkartikey9088@gmail.com</h4>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
