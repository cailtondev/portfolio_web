import React from "react";
import ReactDOM from "react-dom/client";

// All import bootstrap sass and javascript
import "./js/bootstrap";
import "./styles/global/bootstrap.scss";
import "./styles/global/style.scss";

import Home from "./templates/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
