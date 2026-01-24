import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../constants/constants";
import {
  fetchItemRequest,
  fetchItemSuccess,
  fetchItemFailure,
} from "./slices/usersSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((res) => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json();
  });
}

// worker
function* fetchUsersSaga(action) {
  try {
    const data = yield call(fetchHelper, `${API.URL_USERS}${action.payload}`);
    yield put(fetchItemSuccess(data));
  } catch (e) {
    yield put(fetchItemFailure(e.message));
    console.error("Error", e);
  }
}

// watcher
function* watchFetchUsers() {
  yield takeEvery(fetchItemRequest.type, fetchUsersSaga);
}
export default function* usersSaga() {
  yield all([watchFetchUsers()]);
}
