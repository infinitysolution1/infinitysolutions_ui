import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import ImgBox from "./ImgBox";

let section2 = "Our Projects";

const PastWork = () => {
  const [fixed, setFixed] = React.useState(false);

  return (
    <RevealOnScroll
      threshold={0.35}
      onReveal={() => {
        setFixed(true);
      }}
      addedClasses={" w-full overflow-y-hidden relative relative"}
    >
      <section
        onMouseEnter={() => {
          setFixed(true);
        }}
        onMouseLeave={() => {
          setFixed(false);
        }}
        className="flex flex-col h-[150vh] w-full relative z-0 overflow-hidden px-[10vw]"
      >
        <div
          id="section1"
          className={` ${
            fixed ? "fixed  animate-slideUpSmall" : "hidden"
          } left-[40vw] top-[50vh] z-50`}
        >
          <div className="flex flex-col justify-between items-center w-[20vw] bg-black px-4 py-2 rounded-xl border-[1px] border-primaryColor">
            <span className="text-xl md:text-4xl font-bold text-[#0097b2] before:translate-z-[10rem]">
              The Infinity
            </span>
            <span className="text-xl md:text-4xl font-bold text-[#0097b2] before:translate-z-[10rem] -mt-[2.5%]">
              Solutions
            </span>
          </div>
        </div>

        <div className="flex flex-col  items-start mt-[5%] ">
          <h1 className="overflow-hidden text-[48px] text-start font-bold leading-[6rem] text-[#0097b2]">
            {section2.split("").map((char, index) => (
              <span
                className="animate-slideUp inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="absolute h-[50vh] w-[80vh] -right-[20vh] top-[40vh] -z-0">
          <ImgBox
            image={"/aceresumes.png"}
            title="Ace Resumes"
            link={"http://144.24.111.231:7003/"}
          />
        </div>

        <div className="absolute h-[30vh] w-[50vh] right-[20vh] top-[100vh] -z-0">
          <ImgBox
            image={"/mahakali.png"}
            link="https://mahakalisarees.com/"
            title="Mahakali Sarees"
          />
        </div>
        <div className="absolute h-[40vh] w-[60vh] left-[25vh] top-[100vh] -z-0">
          <ImgBox
            image={"/sgt.png"}
            link="https://www.shreegovindtourism.com/"
            title="Shree Govind Tourism"
          />
        </div>
        <div className="absolute h-[40vh] w-[80vh] left-[20vh] top-[30vh] -z-0">
          <ImgBox
            image={"/raksheet.png"}
            link="http://144.24.111.231:7005/home"
            title="Raksheet Hospital"
          />
        </div>
        <div className="absolute h-[50vh] w-[30vh] left-[50vh] top-[60vh] z-10">
          <ImgBox
            image={"/raksheetmobile.jpeg"}
            link="http://144.24.111.231:7005/home"
            title="Raksheet Hospital"
          />
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default PastWork;