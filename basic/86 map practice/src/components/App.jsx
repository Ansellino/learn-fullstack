import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function createEntry(emoji){
  return (
    <Entry 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    Description={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
