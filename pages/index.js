//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Head from "next/head";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Head>
        <title>Codecos</title>
        <link rel="icon" href="/icon-2.png" />
      </Head>
      <div className="bg-primary/80 h-screen">
        {/* text */}
        <div
          className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10"
        >
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h1 hidden lg:block"
            >
              Transforming ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 mt-9 sm:mt-12 sm:mb-0">
                Frontend Developer specialized in creating captivating web
                experiences. Proficient in HTML, CSS, JavaScript, and React.
                Explore my projects and discover how I craft interactive and
                functional interfaces.
              </p>
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative ">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 1.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1250px] h-full absolute right-0 bottom-0">
          <div>
            {/* particles */}
            <ParticlesContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;