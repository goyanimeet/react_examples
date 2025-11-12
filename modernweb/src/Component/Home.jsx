import React from "react";
import video from "../videofile/69496b2d.mp4";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="h-screen w-full fixed top-0">
        <video src={video} autoPlay muted loop playsInline></video>
      </div>
      <div className="relative h-screen w-full zalando font-medium capitalize">
        <div className="text-white text-center text-8xl  ">
          <div> L'étincelle</div>
          <div className="flex flex-nowrap items-center justify-center">
            qui{" "}
            <div className="h-28 w-50 rounded-full">
              {" "}
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-full"
              ></video> 
            </div>
            génère
          </div>
          <div>la créativité</div>
        </div>

        <div className="w-full flex justify-end px-6 py-2">
          <p className="text-white w-[19%]  text-justify text-[12px] ">
            <span className="px-8"></span> K72 est une agence qui pense chaque
            action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On
            cherche la friction qui crée l’étincelle pour générer de l’émotion.
            Pour assurer une relation honnête, on est sans filtre, on dit ce qui
            doit être dit, on fait ce qui doit être fait.
          </p>
        </div>

        <div className="w-full flex py-6 justify-center">
          <div className="border-2 border-white p-3 mr-5 rounded-full group hover:border-lime-300">
            <NavLink
              href="#"
              className="text-white text-7xl font-medium group-hover:text-lime-300"
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </div>
          <div className="border-2 border-white p-3 ml-5 rounded-full group hover:border-lime-300">
            <NavLink
              href="#"
              className="text-white text-7xl font-medium group-hover:text-lime-300"
              to="/agence"
            >
              AGENCE
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
