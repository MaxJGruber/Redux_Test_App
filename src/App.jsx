import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./App.css";

import Header from "./Header";
import { allReducers } from "./store/store_index";

const store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <h1>Hello World!</h1>
      </div>
    </Provider>
  );
}

export default App;
