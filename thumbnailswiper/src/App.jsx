import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "./assets/a.jpeg";
import b from "./assets/b.jpg";
import c from "./assets/c.jpg";
import d from "./assets/d.webp";
import e from "./assets/e.jpg";
import { Thumbs } from "swiper/modules";
function App() {
  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Clicked item at index:", index);
  };
  const onClickThumb = (index) => {
    console.log("Clicked thumbnail at index:", index);
  };
  return (
    <>
      <div className="text-center text-4xl p-2 py-5 bg-blue-300 font-medium  ">
        {" "}
        Swiper
      </div>

      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        swipeable
        emulateTouch
        showThumbs={true}
        className="swiper"
      >
        <div>
          <img src={a} className="image" />
        </div>
        <div>
          <img src={b} className="image" />
        </div>
        <div>
          <img src={c} className="image" />
        </div>
        <div>
          <img src={d} className="image" />
        </div>
        <div>
          <img src={e} className="image" />
        </div>
      </Carousel>
    </>
  );
}

export default App;
