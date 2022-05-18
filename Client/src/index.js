import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
