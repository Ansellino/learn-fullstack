import React from "react";

function Heading(){
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
    
    return <h1 classNamee="heading" style={customStyle}> Hi! {greeting}.</h1>;
}

export default Heading;