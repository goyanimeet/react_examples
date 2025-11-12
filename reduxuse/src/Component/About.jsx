import React from "react";
// import { useSelector } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  devision,
  multipy,
} from "../Redux/Counter/counterslice";
const About = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //   const count = useSelector((state) => state.counter.value);
  //   console.log(count);
  return (
    <>
    
      <h1 className="text-center text-4xl">about page : {count}</h1>
      <div className="flex bg-yellow-50 w-full items-center justify-center h-screen ">
        <section>
          <div>
            <button
              onClick={() => dispatch(increment())}
              className="border-2 px-3 mx-4"
            >
              +
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="border-2 px-3 mx-4"
            >
              -
            </button>
            <button
              onClick={() => dispatch(multipy())}
              className="border-2 px-3  mx-4"
            >
              *
            </button>
            <button
              onClick={() => dispatch(devision())}
              className="border-2 px-3 mx-4"
            >
              %
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
