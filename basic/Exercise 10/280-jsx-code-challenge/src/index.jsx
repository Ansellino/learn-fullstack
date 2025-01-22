//Create a react app from scratch.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    //It should display a h1 heading.
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Bacon</li>
            <li>Noodles</li>
            <li>Jamon</li>
        </ul>
    </div>, 
    document.getElementById("root"));

//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
