import postsSaga from "./postsSaga";
import photosSaga from "./photosSaga";

import { all } from "redux-saga/effects"; // to combine all the saga functions in your applicaion.

function* rootSaga() {
  return yield all([postsSaga(), photosSaga()]);
}

export default rootSaga;
