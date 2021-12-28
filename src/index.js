import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store";
import { store } from "./redux/store";

import "./index.css";

import App from "./Components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
