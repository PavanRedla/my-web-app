import { takeLatest } from "redux-saga/effects";

function* getPhotos() {
  alert("get Photos");
}

function* photosSaga() {
  yield takeLatest("GET_PHOTOS", getPhotos);
}

export default photosSaga;
