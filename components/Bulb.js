//next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-8 -bottom-12 rotate-12 mix-blend-color-dodge duration-0 animate-pulse z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
