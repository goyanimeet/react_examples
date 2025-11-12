import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageReveal2 from "../Common/ImageReveal2";

const Agence = () => {
  const imgref = useRef();

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imgref.current, {
      scrollTrigger: {
        trigger: imgref.current,

        start: "top 30%",
        end: "top -90%",
        scrub: true,
        pin: true,

        onUpdate: (ele) => {
          let arrayindex;
          if (ele.progress < 1) {
            arrayindex = Math.floor(ele.progress * imageArray.length);
          } else {
            arrayindex = imageArray.length - 1;
          }

          imgref.current.src = imageArray[arrayindex];
        },
      },
    });
  });
  return (
    <>
      <div className="h-screen">
        <div className="">
          <div className="h-65 w-50 -z-1   border-transparent top-40 left-90 absolute    ">
            <img
              src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
              alt=""
              ref={imgref}
              className="rounded-4xl"
            />
          </div>
        </div>
        <div className="h-screen w-full ">
          <div className="pt-75">
            <h1 className="text-center font-medium uppercase text-[260px] leading-50">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className=" flex items-end justify-end py-5">
            <p className="text-[25px] w-[50%] font-medium leading-10 ">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
          <div className="h-screen flex  pt-30">
            <div className="h-screen w-full bg-black  relative  flex items-center justify-center p-10 ">
              <div className="w-full absolute top-25  ">
                <marquee
                  behavior="left"
                  direction=""
                  scrollamount="20"
                  className="text-8xl font-medium text-lime-400 -z-1"
                >
                  <h1 className="">Alex</h1>
                </marquee>
              </div>
              <div className="w-full absolute top-80  z-3 ">
                <marquee
                  behavior=""
                  direction="right"
                  scrollamount="20"
                  className="text-8xl font-medium  text-lime-400 "
                >
                  <h1 className=" z-20">
                    SAUVAGEAU{" "}
                    <span className="text-4xl px-6 text-white ">
                      Directeur artistique
                    </span>
                  </h1>
                </marquee>
              </div>
              <div className=" w-[25%]  rounded-4xl z-1">
                <img
                  src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
                  alt=""
                  className="w-full h-full rounded-4xl"
                />
              </div>
            </div>
          </div>
          <div className="pt-25">
            <h1 className="py-5 font-medium text-white text-6xl text-center  bg-black">
              PRÉSENTATION DE L'ÉQUIPE
            </h1>
            <ImageReveal2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Agence;
