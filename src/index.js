//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const first = "Joe";
const last = "Smith";
const CURRENTYEAR = 2020;
ReactDOM.render(
  <div>
    <p>Created by: {first} {last}</p>
    <p>Copyright : {CURRENTYEAR} </p>
  </div>,
  document.getElementById("root")
);
