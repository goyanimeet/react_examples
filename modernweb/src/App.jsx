import React from "react";
import Home from "./Component/Home";

import { Route, Routes } from "react-router";
import Projects from "./Component/Projects";

import Agence from "./Component/Agence";
import Stairanimation from "./Common/Stairanimation";

const App = () => {
  return (
    <>
      <Stairanimation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        ></Route>
        <Route
          path="/agence"
          element={
            <>
              <Agence />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
