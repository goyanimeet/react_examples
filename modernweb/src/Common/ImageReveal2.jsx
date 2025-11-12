"use client";

import { MoveUpRight } from "lucide-react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useMediaQuery } from "./../use-media-query";
const images = [
  {
    id: 1,
    src: "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    alt: " ChantalG",
    occupation: "VPP et directeur général",
  },
  {
    id: 2,
    src: "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    alt: "Olivier Duclos",
    occupation: "Directeur principal",
  },
  {
    id: 3,
    src: "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    alt: "Lawrence",
    occupation: "Conceptrice-rédactrice",
  },
  {
    id: 4,
    src: "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    alt: " HugoJoseph",
    occupation: "Conseillère",
  },

  {
    id: 5,
    src: "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    alt: "Carl GodbOUT",
    occupation: "Conseillère",
  },
  {
    id: 6,
    src: "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    alt: " MyleneS",
    occupation: "Directrice artistique",
  },
  {
    id: 7,
    src: "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    alt: " SophieA",
    occupation: "Directrice de la stratégie",
  },
  {
    id: 8,
    src: "https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa",
    alt: " Claire",
    occupation: "Directrice conseil",
  },
];
const ImageReveal2 = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeImage, setActiveImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);
  const handleImageHover = useCallback(
    (image) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );
  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);
  return (
    <div
      className="relative w-full min-h-fit dark:bg-gradient-to-b bg-black  to-100%  rounded-md border"
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`p-1 cursor-pointer relative sm:flex border-y-1 px-5 border-gray-300 items-center justify-between`}
          onMouseEnter={() => handleImageHover(image)}
        >
          {!isDesktop && (
            <img
              src={image.src}
              className="sm:w-full sm:h-auto w-full h-auto object-cover rounded-md"
              alt="mobileImg"
            />
          )}
          <div className="">
            <div className="">
              <h2
                className={`newFont text-white uppercase md:text-sm sm:text-sm text-sm font-semibold sm:py-6 py-2 leading-[100%] relative ${
                  activeImage?.id === image?.id
                    ? "mix-blend-difference z-20 text-white"
                    : ""
                }`}
              >
                {image.occupation}
              </h2>
            </div>
          </div>
          <div>
            <h2
              className={`newFont text-white uppercase md:text-3xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative ${
                activeImage?.id === image?.id
                  ? "mix-blend-difference z-20 text-white"
                  : "text-gray-700"
              }`}
            >
              {image.alt}
            </h2>
          </div>
          {/*  */}
          <div
            className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
              activeImage?.id === image?.id ? "w-full" : "w-0"
            }`}
          />
        </div>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 w-[300px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  );
};
export default ImageReveal2;
