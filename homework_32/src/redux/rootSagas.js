import { all } from "redux-saga/effects";
import todoSaga from "./todoSagas";
import usersSaga from "./userSagas";

export default function* rootSaga() {
  yield all([todoSaga(), usersSaga()]);
}
