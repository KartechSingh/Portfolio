import React from "react";

const About = () => {
  return (
    <div className="w-full py-20 bg-[#D2FF72] font-['mont'] md:h-screen h-auto text-zinc-950" id="about">
      <div className="flex text-zinc-950 tracking-tighter flex-col gap-8 px-8">
        <h1 className='font-["Mont"] md:text-[3vw] text-[32px] font-bold'>About Me</h1>
        <p className='md:max-w-[60vw] md:text-[1.4vw]  max-w-[80vw] leading-tight'>
          I'm a frontend developer who loves turning ideas into real,
          interactive websites. I work with tools like React, Next.js, and
          Tailwind CSS to create clean, responsive, and user-friendly
          interfaces. Whether it's making sure a site looks great on all devices
          or building seamless user experiences, I enjoy bringing a design to
          life with modern tech like JavaScript and TypeScript.
        </p>
      </div>
      <div className="w-full border-t-[1px] border-[#b8ca7a] mt-8 flex px-16 md:flex-row flex-col justify-between pt-4 ">
        <div>
          <h1 className="font-['Mont'] md:text-[2vw] text-[24px] md:pl-12 font-light ">My Journey</h1>
        </div>
        <div className="flex md:flex-row mt-[16px] pl-10  flex-col">
          <p className="md:max-w-[25vw] md:mr-[10vw] md:text-[1.1vw] max-width-[80vh] text-[14px] tracking-tight font-light">
            My journey has been a roller coaster—one without a seatbelt! After
            college, I ended up in sales because, thanks to COVID-19, my job
            options were as scarce as unicorns. While I gained some valuable
            skills, I soon realized I was more passionate about coding than
            convincing people to buy things. So, I took the leap, leaving my job
            to dive into web development. After seven months of honing my skills
            and tackling freelance projects, I landed a six-month internship as
            a frontend developer at Club One Realtors. Now that it’s wrapped up,
            I’m excited to explore new opportunities in this thrilling
            field—hopefully with fewer loops and more straightaways!
          </p>
          <div className="md:flex flex-col pl-8 gap-4 pt-20 tracking-wider hidden md:visible">
  {[
    { name: "Linkedin", url: "https://www.linkedin.com/in/kartechsingh/" },
    { name: "Github", url: "https://github.com/KartechSingh" },
    { name: "X", url: "https://x.com/KartechSingh" },
    { name: "Instagram", url: "https://www.instagram.com/ig_kaartik?igsh=MWYwYnE5ajVkbjk3dQ==" },
  ].map((item, index) => {
    return (
      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
        {item.name}
      </a>
    );
  })}

</div>
        </div>
      </div>
    </div>
  );
};

export default About;
