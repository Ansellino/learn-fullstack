//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
const name = "Jeremy";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright @{year}</p>
    </div>,
    document.getElementById("root")
)
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
