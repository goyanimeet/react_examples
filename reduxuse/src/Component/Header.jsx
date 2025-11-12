import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router";

const Header = ({ iscolor }) => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div
        className={`${
          iscolor ? "bg-amber-900" : "bg-black"
        } py-10 flex justify-around z-10`}
      >
        <div className="*:px-4">
          <NavLink to={"/about"} className="text-white">
            about
          </NavLink>

          <NavLink to={"/"} className="text-white">
            home
          </NavLink>
        </div>
        <div className="text-white bg-amber-300 p-5 flex justify-center items-center rounded-3xl h-5 w-5">
          {count}
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Header;
