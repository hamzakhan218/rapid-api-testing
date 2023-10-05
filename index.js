const PORT = 8000

const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })