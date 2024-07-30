import { takeLatest } from "redux-saga/effects";

function* getPosts() {
  alert("get posts");
}

function* getPostsByID() {
  alert("get posts by ID");
}

function* postsSaga() {
  yield takeLatest("GET_POSTS", getPosts);
  yield takeLatest("GET_POSTS_BY_ID", getPostsByID);
}

export default postsSaga;
