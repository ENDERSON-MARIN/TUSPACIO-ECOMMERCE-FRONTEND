import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL =
  process.env.REACT_APP_API || "http://localhost:3001/api";

  // console.log(
  //   process.env.REACT_APP_AUTH0_DOMAIN,
  //   process.env.REACT_APP_AUTH0_CLIENT_ID
  // )

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain} 
      clientId={client_id}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
