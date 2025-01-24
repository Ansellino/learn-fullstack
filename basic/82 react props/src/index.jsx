import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.num}</p>
    <p>{props.mail}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    num="+123 456 789" 
    mail="b@beyonce.com" />
    <Card
    name="Jeremy Ansellino"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEKQRxFAB8Ye4ntb3gAbMZ7Rq2RSt3CbatA&s"
    num="+6281229574140"
    mail="ansel@gmail.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
