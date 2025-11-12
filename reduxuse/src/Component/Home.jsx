import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  devision,
  multipy,
} from "../Redux/Counter/counterslice";
const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <>
      <div className="bg-green-300 h-screen w-full flex justify-center items-center font-bold text-5xl">
        <div className="">
          <p className="text-center py-10">{count}</p>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
              className="border-2 px-3 mx-4"
            >
              +
            </button>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(decrement())}
              className="border-2 px-3 mx-4"
            >
              -
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(multipy())}
              className="border-2 px-3  mx-4"
            >
              *
            </button>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(devision())}
              className="border-2 px-3 mx-4"
          >
              %
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
