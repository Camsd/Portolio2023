// work slider data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ecommerce",
          path: "/ecommerce.png",
          link: "https://glowing-axolotl-144d81.netlify.app",
        },
        {
          title: "hotel",
          path: "/hotel-react.png",
          link: "https://meek-dragon-a327cd.netlify.app/",
        },
        {
          title: "restaurant",
          path: "/little-lemon.png",
          link: "https://coruscating-raindrop-1fdd16.netlify.app",
        },

        {
          title: "counter",
          path: "/launching-soon.png",
          link: "https://elaborate-beignet-85de29.netlify.app",
        },
      ],
    },
    {
      images: [
        {
          title: "notes-app",
          path: "/task-aplication1.png",
          link: "https://resilient-douhua-ed40e5.netlify.app",
        },
        {
          title: "title",
          path: "/hotel-react.png",
          link: "https://meek-dragon-a327cd.netlify.app/",
        },
        {
          title: "title",
          path: "/little-lemon.png",
          link: "https://coruscating-raindrop-1fdd16.netlify.app",
        },

        {
          title: "title",
          path: "/launching-soon.png",
          link: "https://elaborate-beignet-85de29.netlify.app",
        },
      ],
    },
  ],
};

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import icons
import { BsArrowRight } from "react-icons/bs";

//import required modules
import { Pagination } from "swiper";

//next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] items-center"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt="projects"
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#ffd0f8] to-[#ffffff] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 color">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100 text-purple-950 text-2xl">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-purple-950 text-2xl">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 text-purple-950">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
