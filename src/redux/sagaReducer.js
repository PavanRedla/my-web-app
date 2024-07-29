import { sagaInit } from "./init";

export const sagaReducer = (state = sagaInit, action) => {
  return {
    ...state,
    posts: action.payload,
  };
  return state;
};
