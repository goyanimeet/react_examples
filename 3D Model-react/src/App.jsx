import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, CameraControls } from "@react-three/drei";

import background from "./assets/background.jpg";
import { Car } from "../public/Car";
import { Iphone } from "../public/Iphone";
import { Appelevision } from "../public/Applevision";

// import { Hotel } from "../public/Hotel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to("#abc", {
      y: 0,
      rotationZ: 0,
      x: 0,
      duration: 5,
      scrollTrigger: {
        trigger: "#abc",
        scroller: ".visionScroll",
        markers: true,
        start: "top 10%",
        end: "bottom 30%",
      },
    });
    // gsap.from('.abc',{
    // y:100,
    // x:0,
    // rotationZ:360,
    // duration:4,
    // opacity:0.3,
    // scale:1,
    //   scrollTrigger:{
    //     trigger:'.abc',
    //     scroller:'',
    //     markers:true,
    //     start: 'top 0%',
    //     end:'bottom   40%',
    //     scrub:true,

    //   }
    // })
  });
  return (
    <>
      <div className="relative">
        <div className="absolute flex items-center justify-center h-screen w-full">
          <img src={background} alt="" className="h-screen w-full" />
        </div>
        <div>
          <h1 className="text-white capitalize absolute text-center top-10 text-4xl tracking-widest left-130 italic ">
            lamborghini
          </h1>
        </div>
        <Canvas camera={{ position: [0, 0, 4] }} className="">
          <OrbitControls
            enableZoom={false}
            // autoRotate={true}
            // autoRotateSpeed={10}
            minPolarAngle={true}
            maxPolarAngle={true}
            dollyIn={10}
            dollyOut={30}
          />

          <Car />

          <Environment preset="forest" />
          {/* <CameraControls /> */}
        </Canvas>
      </div>
      <div className="bg-black h-auto w-full">
        <div className="h-full p-10 w-full bg-black flex items-center justify-center">
          <h1 className="font-medium text-6xl px-3 bg-gradient-to-r from-indigo-500 to-gray-300  text-transparent bg-clip-text">
            iPhone{" "}
          </h1>
          <div className="h-60  w-60 bg-gray-200 rounded-full  outline-4 outline-gray-500 outline-offset-5  ">
            <Canvas camera={{ position: [0, 0, 0.2] }} className="xyz">
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={1}
                minPolarAngle={Math.PI / 2} // user cannot tilt up beyond 30 degrees above the horizon
                maxPolarAngle={Math.PI - Math.PI / 2}
                // minPolarAngle={true}
                // maxPolarAngle={true}
              />
              <Iphone />
              <axesHelper />
              <Environment preset="forest" />
            </Canvas>
          </div>
          <h1 className="font-medium text-6xl px-3 bg-gradient-to-r from-gray-300 to-indigo-500 text-transparent bg-clip-text">
            17 Pro{" "}
          </h1>
        </div>
        <div className="w-full flex items-center text-center justify-center pb-10">
          <div className="text-white w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            culpa molestiae accusantium debitis dicta sed deserunt sit suscipit
            praesentium maxime architecto aspernatur at dolore alias, doloribus
            odit laborum blanditiis velit
          </div>
        </div>
      </div>
      {/* 
      <div className="h-screen w-full">
        <Canvas camera={{ position: [0, 0, 0.8] }} className="hotel">
          <OrbitControls
            enableZoom={true}
            zoom0={10}
            minPolarAngle={Math.PI / 2} // user cannot tilt up beyond 30 degrees above the horizon
            maxPolarAngle={Math.PI - Math.PI / 2}
          />
          <Hotel />
          <Environment preset="studio" />
        </Canvas>
      </div> */}

      {/* Apple vision pro */}
      <div className="visionScroll overflow-hidden h-screen  flex justify-center items-center w-full">
        <Canvas camera={{ position: [0, 0, 1] }} className="abc" id="abc">
          <OrbitControls
            enableZoom={false}
            // dollyIn={10}
            // dollyOut={30}
            minPolarAngle={Math.PI / 2} // user cannot tilt up beyond 30 degrees above the horizon
            maxPolarAngle={Math.PI - Math.PI / 2}
          />
          <Appelevision className="" />
          {/* <axesHelper /> */}
          <Environment preset="studio" />
        </Canvas>
      </div>
      <div className="h-1000"></div>
    </>
  );
};

export default App;
