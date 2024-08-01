import { call, put, takeLatest } from "redux-saga/effects";
import sendGetReq from "@/service/ajax";

function* getPosts(data) {
  // alert("get posts");
  // console.log(222, data);
  const res = yield call(
    sendGetReq,
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  console.log(22, res);
  yield put({ type: "UPDATE_POSTS", payload: res.data });
  // instead of dispatch method we are using  "put" method from saga to effectively handle the asynchronous actions.
  // now the dishpatched data goes to sagaReducer.
}

function* getPostsByID() {
  alert("get posts by ID");
}

function* postsSaga() {
  yield takeLatest("GET_POSTS", getPosts);
  yield takeLatest("GET_POSTS_BY_ID", getPostsByID);
}

export default postsSaga;
