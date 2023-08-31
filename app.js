const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '/public/')));

app.set("views","./src/views");
app.set("views engine","ejs")

app.get("/", (req, res) => {

    res.render("index",{username: "boatevans"});

})

app.listen(PORT, ()=>{
    console.log("listening on port" );
})