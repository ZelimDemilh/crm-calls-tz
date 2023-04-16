const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const path = require("path")
const morgan = require("morgan");
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(morgan("Метод - :method, Статус - :status"));

app.use(express.json())
app.use(cors())
app.use(require('./routes'))

app.listen(port, ()=>{
    console.log("server start")
})