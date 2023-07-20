//link
import Link from "next/link";

//icons
import {
  FaGithub, FaLinkedin,

} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link href={"https://github.com/Camsd"} target="_blank" className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link href={"https://www.linkedin.com/in/eduard-ortega-42xzz/"} target="-blank" className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
