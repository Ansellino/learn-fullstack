//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

// const date = new Date();
const date = new Date(2025, 1, 1, 5);
const currentTime = date.getHours();

let greeting;

const customStyle = {
    color: ""
}

if (currentTime < 12){
    greeting = "Good Morning"
    customStyle.color = "red";
}else if(currentTime < 18){
    greeting = "Good Afternoon"
    customStyle.color = "green";
}else{
    greeting = "Good Night"
    customStyle.color = "blue";
}

ReactDOM.render(
    <h1 classNamee="heading" style={customStyle}> Hi! {greeting}.</h1>
    ,
    document.getElementById("root")
)
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
//<p> this time is {currentTime}:{currentMinutes}</p>