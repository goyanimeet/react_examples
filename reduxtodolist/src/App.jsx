import React from "react";
import Todolist from "./Component/Todolist";
import { SnackbarProvider } from "notistack";
const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Todolist />
      </SnackbarProvider>
    </>
  );
};

export default App;
