import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});

// netstat - ano | findstr "LISTENING"
/* Request Vocab :
1. GET -> Request Resource
2. POST -> Sending Resource
3. PUT -> Replace Resource
4. PATCH -> Patch Up a resource
5. DELETE -> Delete Resource
*/