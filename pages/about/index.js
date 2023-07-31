import React, { useState, useEffect } from "react";
//icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss, SiAdobexd } from "react-icons/si";
//image
import Image from "next/image";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <TbBrandFramerMotion key="framer-motion" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobe-xd" />],
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Meta Front-End Developer Professional Certificate (June 2022) - (July 2023)",
      },
      {
        title: "Responsive Design Certificate (300h) - FreeCodeCamp - 2022",
      },
      {
        title:
          "Professional Fundamentals of Software Development, by Microsoft and LinkedIn - 2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    return () => {
      setIndex(0);
    };
  }, []);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <Image
            src={"/I.png"}
            width={160}
            height={48}
            alt="Foto de Eduard Camilo Ortega, desarrollador frontend"
            priority={true}
            className="rounded-full mx-32 mb-0 max-w-min hidden sm:hidden md:hidden lg:hidden xl:block "
          />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 mt-9 sm:mt-12 sm:mb-0">
            I&apos;m Eduard, a passionate frontend developer with a
            creative mind and a love for design and web development. With
            expertise in HTML, CSS, and JavaScript, I enjoy building attractive
            and functional web interfaces.
          </p>
        </motion.div>
        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] sm:mt-0 md:mt-20 xl:mt-40"
        >
          <div className="flex gap-x-4 xl:gap-x-10 mx-auto xl:mx-0 mb-5">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-current after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-current after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;