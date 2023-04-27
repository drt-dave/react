import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CounterApp value={100}/>
   {/*  <FirstApp  /> */}
  </React.StrictMode>
);
