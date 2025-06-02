// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function ParticlesBg() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -1 },
//         background: { color: { value: "#f8fafc" } }, // background color
//         particles: {
//           number: { value: 40 },
//           size: { value: 2 },
//           move: { enable: true, speed: 0.6 },
//           opacity: { value: 0.3 },
//           color: { value: "#60a5fa" },
//           links: { enable: true, distance: 150, color: "#93c5fd", opacity: 0.2 },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// }
