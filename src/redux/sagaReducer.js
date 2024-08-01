import { sagaInit } from "./init";

export const sagaReducer = (state = sagaInit, action) => {
  switch (action.type) {
    case "UPDATE_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
  }
  return state;
};
