const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const { StatusCodes } = require("http-status-codes");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));

const { PORT } = require("./config/server.config")

app.get("/ping", (req,res,next)=> {
    res.status(StatusCodes.OK).json({
        message : "Quora ping works fine"
    })
})


app.listen(PORT, ()=> {
    console.log("Server is connected to ", PORT)
})
