import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import logger from "redux-logger";
import { sagaReducer } from "./sagaReducer";

export const appStore = configureStore({
  reducer: {
    // appReducer: appReducer
    // when the key and prop are same we can use the short hand syntax.
    appReducer,
    sagaReducer,
  },
  middleware: () => {
    return [logger];
  }, // middleware is a type of callback function which returns logger
});
