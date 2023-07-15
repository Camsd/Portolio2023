//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/80 h-full">
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
            className="h1"
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            accusamus quam eveniet obcaecati laudantium fugit excepturi
            voluptatem veritatis deleniti animi!
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
      <div className="w-[1250px] h-full absolute right-0 bottom-0 ">
        <div>
          {/* particles */}
          {/* <ParticlesContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
