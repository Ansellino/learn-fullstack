function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

s = prompt("What is your name?");
s = capitalizeFirstLetter(s)

console.log("Hello," + s);