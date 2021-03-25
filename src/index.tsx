import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./App";
import { reducers } from "./store";

const initStore = () => {
  const store = localStorage.getItem("store");
  if (store) {
    return JSON.parse(store);
  }
  return undefined;
};
const store = createStore(reducers, initStore());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
