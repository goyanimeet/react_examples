import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Stairanimation = () => {
  const locate = useLocation().pathname;
  const stairParentref = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentref.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,

        stagger: {
          amount: -0.4,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.4,
        },
      });

      tl.to(stairParentref.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "-0%",
      });
    },
    [locate]
  );
  return (
    <>
      <div ref={stairParentref} className=" h-dvh  z-10 w-full fixed">
        <div className="stairani  flex h-dvh w-full  ">
          <div className="stair w-1/5 bg-black"></div>
          <div className="stair w-1/5 bg-black"></div>
          <div className="stair w-1/5 bg-black"></div>
          <div className="stair w-1/5 bg-black"></div>
          <div className="stair w-1/5 bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default Stairanimation;
