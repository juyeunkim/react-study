import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './modules';
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(reducers,composeWithDevTools())

// store 사용하기 위해서 Provider 이용
ReactDOM.render(
    <Provider store = {store}> 
      <App />
    </Provider>,
  document.getElementById("root")
);
