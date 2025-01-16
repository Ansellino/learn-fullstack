const fs = require("fs");

/*
// write file
fs.writeFile("Mes.txt", "Hello from Ansel!", (err)=>{
    if(err) throw err;
    console.log("THe file has been saved!");
});
*/

//read file
fs.readFile("./Mes.txt", 'utf8', (err, data)=> {
    if(err) throw err;
    console.log(data);
});