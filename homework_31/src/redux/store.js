import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./slices/todoSlice";
import rootSaga from "./sagas";
import logger from "redux-logger";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
