'use strict'

const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/ping", (req,res,next) => {
    res.status(200).json("pong!");
})


app.listen(PORT, () => {
 console.log("Server running on port 3000");
});
