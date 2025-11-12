import React from "react";
import Home from "./Component/Home";
import Header from "./Component/header";

import { Routes, Route } from "react-router";
import About from "./Component/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route
            element={
              <>
                <Header />
                <Home />
              </>
            }
            path="/"
          />
          <Route
            element={
              <>
                <Header iscolor={true} />
                <About />
              </>
            }
            path="/about"
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
