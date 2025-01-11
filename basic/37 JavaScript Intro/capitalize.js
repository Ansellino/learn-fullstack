function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

/*

Step :

// isolate the first char
var firstChar = name.slice(0,1);

// turn the first char into upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// Isolate the rest of the name
var restOfName = name.slice(1,name.length);

// Concactenate the first char with rest of char
var capitalizeName = upperCaseFirstChar + restofName;

*/

s = prompt("What is your name?");
s = capitalizeFirstLetter(s)

console.log("Hello," + s);