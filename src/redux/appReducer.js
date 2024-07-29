import { appInit } from "./init";

export const appReducer = (state = appInit, action) => {
  switch (action.type) {
    case "PHOTOS_UPDATE":
      return {
        ...state,
        photos: action.payload,
      };
  }
  return state;
};
