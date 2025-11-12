import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from './Counter/counterslice';

export default configureStore({
 reducer: {
    counter: counterReducer
    
  }
});
  