import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Todomod from "./todomod"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Todomod />
  </StrictMode>,
  rootElement
);
