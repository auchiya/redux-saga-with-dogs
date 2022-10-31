import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import dogSaga from "./dogSaga";
import "./index.css";
import dogsReducer from "./dogState";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
  middleware: [saga],
});

saga.run(dogSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
