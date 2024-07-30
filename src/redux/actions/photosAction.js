import sendGetReq from "@/service/ajax";
// import { useDispatch } from "react-redux";
import { appStore } from "../appStore";

export const photosAction = async () => {
  //   const dispatch = useDispatch();
  // we cannot use the dispatch method here because photosAction is not  functional component. so import appStore and from appstore we can get te dispatch method
  try {
    const res = await sendGetReq("https://jsonplaceholder.typicode.com/photos");
    appStore.dispatch({ type: "PHOTOS_UPDATE", payload: res.data });
  } catch (ex) {
    console.log(ex);
  } finally {
  }
};
