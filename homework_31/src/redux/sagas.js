import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../constants/constants";
import {
  addItem,
  addTodo,
  deleteTodo,
  deleteItem,
  editTodo,
  editItem,
  fetchItem,
  fetchStart,
} from "./slices/todoSlice";
function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    return response.json();
  });
}

//workers
function* fetchTodoSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_TODO);

    yield put(fetchItem(todos));
  } catch (e) {
    console.log("Error", e);
  }
}
function* addTodoSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: action.payload }),
    });
    yield put(addItem(todo));
  } catch (e) {
    console.log("Error", e);
  }
}
function* deleteTodoSaga(action) {
  try {
    yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
      method: "DELETE",
    });
    yield put(deleteItem(action.payload));
  } catch (e) {
    console.log("Error", e);
  }
}
function* editTodoSaga(action) {
  try {
    const updatedTodo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: action.payload.name }),
      },
    );

    yield put(editItem(updatedTodo));
  } catch (e) {
    console.error("Error editing todo:", e);
  }
}

//watchers

function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchTodoSaga);
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, addTodoSaga);
}
function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteTodoSaga);
}
function* watchEditTodo() {
  yield takeEvery(editTodo.type, editTodoSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchEditTodo(),
  ]);
}
