import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-11/12 h-full absolute translate-z-0 hidden lg:block xl:block"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 20,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#E7D5A2",
            distance: 95,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: .5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 130,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;